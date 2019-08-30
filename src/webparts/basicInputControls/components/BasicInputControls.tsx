import * as React from 'react';
import styles from './BasicInputControls.module.scss';
import { IBasicInputControlsProps } from './IBasicInputControlsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, Checkbox} from 'office-ui-fabric-react';

export interface ICheckboxBasicExampleState {
  isChecked: boolean;
}

export default class BasicInputControls extends React.Component<IBasicInputControlsProps, {}> {

  constructor(props: IBasicInputControlsProps) {
    super(props);

    this._onCheckboxChange = this._onCheckboxChange.bind(this);
  }
  


  btn_Submit = () => {
    alert('Value Submitted');
  }

  
  public render(): React.ReactElement<IBasicInputControlsProps> {

    

    return (
      
      <div>
      
      <DefaultButton text="Standard" onClick={() => this.btn_Submit()} allowDisabledFocus />
      <PrimaryButton text="Primary" onClick={() => this.btn_Submit()} allowDisabledFocus />
      <Checkbox label="Standard checkbox" onChange={this._onCheckboxChange} />

      </div>
      
    );
  }

  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(`The option has been changed to ${isChecked}.`);
  }
}
