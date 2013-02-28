###*
* DeftJS Application class for the DeftTemplateGenerator application.
###
Ext.define( "DeftTemplateGenerator.Application",
  extend: "Deft.mvc.Application"
  requires: [
    "DeftTemplateGenerator.config.AppConfig",
    "DeftTemplateGenerator.view.Viewport"
  ]


  ###*
  * init() runs when Ext.onReady() is called.
  ###
  init: ->
    @beforeInit()
    Deft.Injector.configure( @buildInjectorConfiguration() )
    @afterInit()


  ###*
  * @protected
  * Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
  * @return {Object} The Injector configuration object.
  ###    
  buildInjectorConfiguration: ->
    config =
      appConfig:
        className: "DeftTemplateGenerator.config.AppConfig"
        parameters: [ environment: DeftTemplateGenerator.config.AppConfig.MOCK_DATA_ENV ]

    return config


  ###*
  * @protected
  * Runs at the start of the init() method. Override in subclasses if needed.
  ###
  beforeInit: ->
    return


  ###*
  * @protected
  * Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
  ###
  afterInit: ->
    # Set up QuickTips and create the Viewport
    Ext.tip.QuickTipManager.init()
    Ext.create( "DeftTemplateGenerator.view.Viewport" )

)
