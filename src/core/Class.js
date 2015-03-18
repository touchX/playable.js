/**
 * Go2d 的基础类，Go2d 的所有类都继承于该类。
 * @author Lanfei
 * @class Class
 */
var Class = go2d.Class = function() {};

/**
 * 创建一个继承于该类的新类
 * @static
 * @function extend
 * @param {object} props 新类的属性或方法
 * @param {object} [statics] 新类的静态属性或方法
 * @return {function} 新类的构造函数
 */
Class.extend = function(props, statics) {
	var superProto = this.prototype;

	function Class() {
		if (isFunction(this.__init)) {
			return this.__init.apply(this, arguments);
		}
	}

	Class.prototype = Object.create(superProto);
	Class.prototype.constructor = Class;
	Class.extend = go2d.Class.extend;

	forEach(props, function(value, key) {
		var desc = Object.getOwnPropertyDescriptor(props, key);
		// Extend Getter/Setter
		if (desc.get || desc.set) {
			Object.defineProperty(Class.prototype, key, desc);
		} else {
			if (isFunction(value) && /\bthis\._super\(/.test(value)) {
				var fn = value;
				Class.prototype[key] = function() {
					this._super = superProto[key];
					var ret = fn.apply(this, arguments);
					this._super = superProto;
					return ret;
				};
			} else {
				Class.prototype[key] = value;
			}
		}
	});

	forEach(statics, function(value, key) {
		Class[key] = value;
	});

	return Class;
};