import { Stage } from './Stage';
import { Ticker } from '../system/Ticker';
import { Matrix } from '../geom/Matrix';
import { Vector } from '../geom/Vector';
import { Rectangle } from '../geom/Rectangle';
import { Texture } from '../media/Texture';
import { TouchEvent } from '../event/TouchEvent';
import { EventEmitter } from '../event/EventEmitter';
export declare class Layer extends EventEmitter {
    static pixelRatio: number;
    name: string;
    tag: string;
    touchable: boolean;
    protected $x: number;
    protected $y: number;
    protected $width: number;
    protected $height: number;
    protected $anchorX: number;
    protected $anchorY: number;
    protected $skewX: number;
    protected $skewY: number;
    protected $scaleX: number;
    protected $scaleY: number;
    protected $rotation: number;
    protected $alpha: number;
    protected $visible: boolean;
    protected $smoothing: boolean;
    protected $backgroundColor: string;
    protected $backgroundImage: Texture;
    protected $backgroundPattern: CanvasPattern;
    protected $backgroundFillMode: BackgroundFillMode;
    protected $dirty: boolean;
    protected $stage: Stage;
    protected $parent: Layer;
    protected $children: Array<Layer>;
    protected $shouldEmitTap: boolean;
    protected $touches: Array<boolean>;
    protected readonly $canvas: HTMLCanvasElement;
    protected readonly $context: CanvasRenderingContext2D;
    constructor();
    width: number;
    height: number;
    x: number;
    y: number;
    anchorX: number;
    anchorY: number;
    skewX: number;
    skewY: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    alpha: number;
    backgroundColor: string;
    backgroundImage: Texture;
    backgroundFillMode: BackgroundFillMode;
    visible: boolean;
    smoothing: boolean;
    readonly dirty: boolean;
    readonly stage: Stage;
    readonly parent: Layer;
    readonly children: Array<Layer>;
    readonly ticker: Ticker;
    readonly canvas: HTMLCanvasElement;
    addChild(child: Layer): this;
    addChildAt(child: Layer, index: number): this;
    replaceChild(oldChild: Layer, newChild: Layer): this;
    getChildByName(name: string): Layer;
    getChildrenByTag(tag: string): Array<Layer>;
    getChildAt(index: number): Layer;
    getChildIndex(child: Layer): number;
    hasChild(child: Layer): boolean;
    swapChildren(child1: Layer, child2: Layer): this;
    swapChildrenAt(index1: number, index2: number): this;
    setChildIndex(child: Layer, index: number): this;
    removeChild(child: Layer): this;
    removeChildAt(index: number): this;
    removeChildrenByName(name: string): this;
    removeChildrenByTag(tag: string): this;
    removeAllChildren(): this;
    removeSelf(): this;
    protected $markDirty(sizeDirty?: boolean): void;
    protected $markParentDirty(): void;
    protected $resizeCanvas(): void;
    protected $resizeParentCanvas(): void;
    protected $getTransform(): Matrix;
    protected $getChildTransform(child: Layer): Matrix;
    protected $getChildBounds(child: Layer): Rectangle;
    protected $getContentBounds(): Rectangle;
    protected $emitTouchEvent(event: TouchEvent, inside: boolean): boolean;
    protected $getPattern(texture: Texture, fillMode: BackgroundFillMode): CanvasPattern;
    protected $localHitTest(vector: Vector): boolean;
    protected $isChildVisible(child: Layer): boolean;
    protected $drawBackground(color: string, texture: Texture, pattern: CanvasPattern, fillMode: BackgroundFillMode, context?: CanvasRenderingContext2D): void;
    protected $drawChild(child: Layer): number;
    protected $render(): number;
    on(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener?: (...args: any[]) => void): this;
    protected $onAdded(parent: Layer): void;
    protected $onRemoved(): void;
    protected $onAddedToStage(stage: Stage): void;
    protected $onRemovedFromStage(stage: Stage): void;
}
export declare type BackgroundFillMode = 'scale' | 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
