Ext.define('3725OS.ux.MessageBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.ux-msgbar',
    activeThreadId: 0,
    dock: 'bottom',
    config: {
        cls: 'x-messagebar',
        emptyText: '',
        defaultText: '',
        autoClear: 5000
    },


    initComponent: function () {
        this.callParent(arguments);
    },

    afterRender: function () {

        this.ownerCt.on('resize', function (ownerContainer, width, height) {
            if (width == this.parentWidth && height == this.parentHeight) {
                return;
            }
            var bar = Ext.get(this.id + '-bar');
            if (bar) {
                bar.setStyle('width', (this.ownerCt.getWidth() - 10) + 'px');
            }

        }, this);

        this.el.addCls('x-message-msgbar-body');

        this.currIconCls = this.iconCls || this.defaultIconCls;
        var me = this;

        setTimeout(function () {

            var tpl = new Ext.XTemplate(
                '<div id="{id}-bar" class="{bodyCls}"',
                ' style="width: {width}px; {left}">',
                '<div class="{msgCls}"></div>',
                '<div style="float:right" class="{closeCls}">X</div>',
                '</div>'
            );

            tpl = tpl.apply({
                    id: me.id,
                    bodyCls: 'x-message-msgbar-body',
                    width: me.ownerCt.getWidth() - 10,
                    left: Ext.isIE8 ? 'left:5px' : '',
                    msgCls: 'x-message-bar-msg',
                    closeCls: 'x-message-bar-close'

                });

            me.ownerCt.el.createChild(tpl);

            Ext.select('.x-message-bar-close').on('click', function () {
                me.clearMessage();
            });

        }, 500);

        this.hide();
        this.callParent(arguments);
    },

    setMessageData: function (o) {
        o = o || {};
        if (o.text !== undefined) {
            this.setText(o.text);
        }
        if (o.iconCls !== undefined) {
            var bar = Ext.get(this.id + '-bar');
            if (o.iconCls == 'x-message-error ') {
                bar.removeCls('x-message-msg-body');
                bar.addCls('x-message-error-body');
            } else {
                bar.removeCls('x-message-error-body');
                bar.addCls('x-message-msg-body');
            }
            this.setIcon(o.iconCls);
        }
        if (o.clear) {
            var c = o.clear, wait = this.autoClear, defaults = {
                useDefaults: true,
                anim: true
            };
            if (Ext.isObject(c)) {
                c = Ext.applyIf(c, defaults);
                if (c.wait) {
                    wait = c.wait;
                }
            } else if (Ext.isNumber(c)) {
                wait = c;
                c = defaults;
            } else if (Ext.isBoolean(c)) {
                c = defaults;
            }
            c.threadId = this.activeThreadId;
            if (this.clearTimer) {
                clearTimeout(this.clearTimer);
            }
            this.clearTimer = Ext.defer(this.clearMessage, wait, this, [c]);
        }
    },

    setMessage: function (o) {
        if (o && (o.text == '' || o.text == '&nbsp;')) {
            return;
        } else {
            var cmp = Ext.get(this.id + '-bar');
            if (cmp) {
                cmp.slideIn('b', {
                    duration: 300,
                    easing: 'easeIn',
                    callback: function () {
                        this.setMessageData(o);
                    },
                    scope: this
                });
            }
        }
    },

    clearMessage: function (o) {
        o = o || {};
        if (o.threadId && o.threadId !== this.activeThreadId) {
            return this;
        }
        var bar = Ext.get(this.id + '-bar');
        if (bar) {
            Ext.get(this.id + '-bar').slideOut('b', {
                duration: 300,
                easing: 'easeOut',
                callback: function () {
                    var text = o.useDefaults ? this.defaultText : this.emptyText,
                        iconCls = o.useDefaults ? (this.defaultIconCls ? this.defaultIconCls : '') : '';
                    this.setMessage({
                        text: text,
                        iconCls: iconCls
                    });
                },
                scope: this
            });
        }
        return this;
    },

    setText: function (text) {
        this.activeThreadId++;
        this.text = text || '';
        if (this.rendered) {
            Ext.get(this.id + '-bar').select('.x-message-bar-msg').update(this.text)
        }
        return this;
    },

    getText: function () {
        return this.text;
    },

    setIcon: function (cls) {
        cls = cls || '';
        if (this.currIconCls) {
            Ext.get(this.id + '-bar').removeCls(this.currIconCls);
            this.currIconCls = null;
        }
        if (cls.length > 0) {
            Ext.get(this.id + '-bar').addCls(cls);
            this.currIconCls = cls;
        }
        return this;
    },

    showMessage: function (msg) {

        if (Ext.isString(msg)) {
            msg = {
                text: msg
            }
        }

        this.setMessage({
            text: msg.text,
            iconCls: 'x-message-'
                + (msg.type || '') + ' ',
            clear: Ext.isDefined(msg.clear) ? msg.clear : true
        });

    }
});
