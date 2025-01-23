import { createControlComponent } from "@react-leaflet/core";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-pro";
import "@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css";
import "@geoman-io/leaflet-geoman-pro-screenshot";
import "@geoman-io/leaflet-geoman-pro-screenshot/dist/leaflet-geoman-pro-screenshot.css";


interface Props extends L.ControlOptions {
  position: L.ControlPosition;
  drawCircle?: boolean;
  oneBlock?: boolean;
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options: Props) {
    L.setOptions(this, options);
  },

  addTo(map: L.Map) {
    if (!map.pm) return;

    map.pm.addControls({
      ...this.options,
    });

  // Add GeomanScreenshot controls Avoid re-adding controls if they already exist
  if (map.pm.Toolbar && !map.pm.Toolbar.controlExists('GeomanScreenshot')) {
    const screenshotOptions = {
      format: 'image',
      caption: 'This is a caption',
    };
    L.PM.initializeGeomanScreenshot(map, screenshotOptions);

    map.on('pm:prepare-screenshot pm:screenshot', console.log);

    // Example of how to handle the screenshot event and display the image on the page
    // map.on('pm:screenshot', (e) => {
    //   let img = document.createElement('img');
    //   img.src = e.image;
    //   document.body.appendChild(img);
    // });

    // Example of how to handle the screenshot event and download the image
    // map.on('pm:screenshot', (e) => {
    //   // Create a hidden anchor element
    //   const link = document.createElement('a');
    //   link.href = e.image; // Use the image data from the event
    //   link.download = 'screenshot.png'; // Specify the file name
    
    //   // Programmatically click the link to trigger the download
    //   document.body.appendChild(link); // Append the link to the body (necessary for Firefox)
    //   link.click();
    //   document.body.removeChild(link); // Clean up
    // });
    return;
  }

  },
});

const createGeomanInstance = (props: Props) => {
  return new Geoman(props);
};

export const GeomanControl = createControlComponent(createGeomanInstance);
