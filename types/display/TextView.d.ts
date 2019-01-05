import Layer from './Layer';
import Rectangle from '../geom/Rectangle';
export default class TextView extends Layer {
    static defaultFontSize: number;
    private static readonly wordRe;
    private static readonly boundaryRe;
    protected $text: string;
    protected $color: string;
    protected $fontSize: number;
    protected $fontStyle: FontStyle;
    protected $fontWeight: FontWeight;
    protected $textAlign: TextAlign;
    protected $verticalAlign: VerticalAlign;
    protected $lineHeight: number;
    protected $strokeSize: number;
    protected $strokeColor: string;
    protected $fontFamily: string;
    protected $multiline: boolean;
    protected $breakWord: boolean;
    protected $autoFitSize: boolean;
    protected $minFontSize: number;
    protected $explicitSize: number;
    protected $lines: Array<string>;
    constructor(text?: string, options?: TextViewOption);
    text: string;
    color: string;
    fontSize: number;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    verticalAlign: VerticalAlign;
    lineHeight: number;
    strokeSize: number;
    strokeColor: string;
    fontFamily: string;
    multiline: boolean;
    breakWord: boolean;
    autoFitSize: boolean;
    protected $updateContext(): void;
    protected $divideUnits(): Array<string>;
    protected $divideLines(): void;
    protected $resizeCanvas(): void;
    protected $getContentBounds(): Rectangle;
    protected $render(): number;
}
export declare type FontStyle = 'normal' | 'italic' | 'oblique';
export declare type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export declare type TextAlign = 'left' | 'right' | 'center';
export declare type VerticalAlign = 'top' | 'middle' | 'bottom';
export interface TextViewOption {
    color?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    textAlign?: TextAlign;
    verticalAlign?: VerticalAlign;
    lineHeight?: number;
    strokeSize?: number;
    strokeColor?: string;
    fontFamily?: string;
    multiline?: boolean;
    breakWord?: boolean;
}
