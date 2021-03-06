// Generated by CoffeeScript 1.4.0
/**
* DeftJS Application class for the Phoenix application.
*/

Ext.define("Phoenix.Application", {
  extend: "Deft.mvc.Application",
  requires: ["Phoenix.config.AppConfig", "Phoenix.view.Viewport", "Phoenix.store.ScenarioStore", "Phoenix.service.ScenarioService", "Phoenix.context.ScenarioContext", "Phoenix.store.ProbabilityStore", "Phoenix.store.RevenueImpactStore", "Phoenix.store.AffectedItemStore", "Phoenix.service.NotificationService"],
  /**
  	* init() runs when Ext.onReady() is called.
  */

  init: function() {
    this.beforeInit();
    Deft.Injector.configure(this.buildInjectorConfiguration());
    Deft.promise.Deferred.enableLogging = false;
    return this.afterInit();
  },
  /**
  	* @protected
  	* Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
  	* @return {Object} The Injector configuration object.
  */

  buildInjectorConfiguration: function() {
    var config;
    config = {
      appConfig: {
        className: "Phoenix.config.AppConfig",
        parameters: [
          {
            environment: Phoenix.config.AppConfig.PRODUCTION_ENV
          }
        ]
      },
      scenarioStore: "Phoenix.store.ScenarioStore",
      scenarioService: "Phoenix.service.ScenarioService",
      scenarioContext: "Phoenix.context.ScenarioContext",
      probabilityStore: "Phoenix.store.ProbabilityStore",
      revenueImpactStore: "Phoenix.store.RevenueImpactStore",
      affectedItemStore: "Phoenix.store.AffectedItemStore",
      notificationService: "Phoenix.service.NotificationService"
    };
    return config;
  },
  /**
  	* @protected
  	* Runs at the start of the init() method. Override in subclasses if needed.
  */

  beforeInit: function() {},
  /**
  	* @protected
  	* Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
  */

  afterInit: function() {
    Ext.tip.QuickTipManager.init();
    return Ext.create("Phoenix.view.Viewport");
  }
});
