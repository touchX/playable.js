import ImageView from './ImageView';
import Image from '../media/Image';
import Event from '../event/Event';
import Rectangle from '../geom/Rectangle';

export default class MovieClip extends ImageView {

	protected $paused: boolean = true;
	protected $currentFrame: number = 0;
	protected $frames: Array<MovieClipFrameData> = null;
	protected $interval: number = 30;
	protected $timer: number;
	protected $boundNextFrame: Function;

	public constructor(image: Image, frames: Array<MovieClipFrameData>, interval: number = 30) {
		super(image);
		this.$frames = frames;
		this.$interval = interval || this.$interval;
		this.$boundNextFrame = this.nextFrame.bind(this);
		this.play();
	}

	public get paused(): boolean {
		return this.$paused;
	}

	public set paused(paused: boolean) {
		this.$paused = paused;
	}

	public get currentFrame(): number {
		return this.$currentFrame;
	}

	public set currentFrame(currentFrame: number) {
		this.$currentFrame = currentFrame;
	}

	public get totalFrames(): number {
		return this.$frames.length;
	}

	public play(): this {
		this.off(Event.ADDED_TO_STAGE, this.play);
		return this.gotoAndPlay(this.$currentFrame);
	}

	public pause(): this {
		let ticker = this.ticker;
		this.$paused = true;
		if (ticker) {
			ticker.clearTimeout(this.$timer);
		}
		return this;
	}

	public nextFrame(): this {
		return this.gotoAndPlay(this.$currentFrame + 1);
	}

	public gotoAndPlay(frame: number): this {
		this.$paused = false;
		this.$gotoFrame(frame);
		let ticker = this.ticker;
		let frameData = this.$frames[this.$currentFrame];
		if (ticker) {
			ticker.clearTimeout(this.$timer);
			this.$timer = ticker.setTimeout(this.$boundNextFrame, frameData.interval || this.$interval);
		} else {
			this.on(Event.ADDED_TO_STAGE, this.play);
		}
		return this;
	}

	public gotoAndStop(frame: number): this {
		this.$paused = true;
		this.$gotoFrame(frame);
		return this;
	}

	protected $gotoFrame(frame: number): void {
		let totalFrames = this.$frames.length;
		if (frame < 0 || frame >= totalFrames) {
			frame = (frame + totalFrames) % totalFrames;
		}
		if (frame < 0) {
			frame = 0;
		}
		let frameData = this.$frames[frame];
		this.$currentFrame = frame;
		this.clipRect = frameData.clip;
		if (this.stage && frameData.callback) {
			frameData.callback.call(this);
		}
	}

}

export interface MovieClipFrameData {
	clip: Rectangle,
	interval: number,
	callback: Function
}