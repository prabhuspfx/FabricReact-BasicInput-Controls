import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'BasicInputControlsWebPartStrings';
import BasicInputControls from './components/BasicInputControls';
import { IBasicInputControlsProps } from './components/IBasicInputControlsProps';

export interface IBasicInputControlsWebPartProps {
  description: string;
  
}

export default class BasicInputControlsWebPart extends BaseClientSideWebPart<IBasicInputControlsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBasicInputControlsProps > = React.createElement(
      BasicInputControls,
      {
        description: this.properties.description, 
        isChecked: false

        
        
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
