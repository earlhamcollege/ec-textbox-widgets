module.exports = {
  extend: 'apostrophe-widgets',
  label: 'EC Textbox',
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'content',
        type: 'singleton',
        label: 'Textbox Content',
        widgetType: 'apostrophe-rich-text',
        options: {
                toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
                styles: [
                  {name: 'Title', element: 'h3'},
                  {name: 'Meta', element: 'h5'}
                ]
            }
      },
      {
        name: 'textbox_background_color',
        type: 'select',
        label: 'Select Background Color',
        choices: [
          {
            label: 'Color 1 (Maroon)',
            value: '1'
          },
          {
            label: 'Color 2 (Red)',
            value: '2'
          },
          {
            label: 'Color 3 (Yellow)',
            value: '3'
          },
          {
            label: 'Color 4 (Blue)',
            value: '4'
          }
        ]
      },
      {
        name: 'textbox_text_color',
        type: 'select',
        label: 'Select Text Color',
        choices: [
          {
            label: 'Color 1 (Black)',
            value: '1',
          },
          {
            label: 'Color 2 (White)',
            value: '2',
          }
        ]
      },
      {
        name: 'textbox_font_size',
        type: 'range',
        label: 'Select Text Size',
        min: 1,
        max: 3,
        step: .25,
        def: 1
      }    
  ].concat(options.addFields || [])
},
construct: function (self, options) {
    var superPushAssets = self.pushAssets;

    self.pushAssets = function() {
      superPushAssets();
      self.pushAsset('stylesheet','variables');
      self.pushAsset('stylesheet','always');
      self.pushAsset('stylesheet','custom');
      self.pushAsset('script','always');
    }
  }
};
