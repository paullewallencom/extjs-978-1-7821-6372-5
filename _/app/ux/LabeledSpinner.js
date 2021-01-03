Ext.define('3725OS.ux.LabeledSpinner', {
    extend : 'Ext.form.field.Spinner',
    alias : 'widget.labeledspinner',
    
    config : {
        labelText : '',
        minValue : 0,
        maxValue : Number.MAX_VALUE,
        step : 1,
        value : 0
    },

    onBlur : function() {            
        if (isNaN(this.getValue())) {
            this.setValue(this.getLabeledValue(this.getMinValue()));
        }
        else{
            this.setValue(this.getLabeledValue());
        }        
    },

    onSpinUp : function() {
        var val = this.getValue() || this.getMinValue();        
        this.setChangedValue(val + this.step);
    },

    onSpinDown : function() {
        var val = this.getValue() || this.getMinValue();
        
        this.setChangedValue(val - this.step);
    },

    getLabeledValue : function(value) {       
        value = Ext.isDefined(value) ? value : this.getValue();
        if (value.toString().indexOf(this.getLabelText()) == -1) {
            return value + ' ' + this.getLabelText();
        } else {
            return value;
        }
    },

    setValue : function(value) {
        if(!this.readOnly){
            value = this.getLabeledValue(value);                       
        }
        this.callParent(arguments);
    },

    getValue : function() {  
        var me = this, 
            val = me.rawToValue(me.processRawValue(me.getRawValue()));        
        
        val = parseFloat(val.split(' ')[0]);
        return val;
    },

    setChangedValue : function(value){        
        if(!isNaN(value)){           
            this.setValue(Ext.Number.constrain(value, this.getMinValue(), this.getMaxValue()));            
        }
    }
    
});