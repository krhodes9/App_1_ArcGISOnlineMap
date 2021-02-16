require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {

        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "24d3c2c2585e4403a3faafe932258359"
          }
        });

        var view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
