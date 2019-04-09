import {Bind} from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

 //View
import {NotesPanel} from "@View/components/NotesPanel";
import {NotesCreationForm} from "@View/components/NotesCreationForm";
import { Button } from "react-bootstrap";

import "./NotesCreationItem.Style.scss";


export class NotesCreationItem extends PureComponent {

  state = {
    isCreating: false
  };

  @Bind()
  onCreationStarted() {
    this.setState({
      isCreating: true
    });
  }

  @Bind()
  onCreationCancelled() {
    this.setState({
      isCreating: false
    });
  }

  @Bind()
  onCreate({title, text}) {
    console.error({title, text});
  }

  renderCreationForm() {
    return (
      <NotesCreationForm onCancel={this.onCreationCancelled} onCreate={this.onCreate}/>
    );
  }

  renderToggleItem() {
    return (
      <Button variant={'outline-dark'} onClick={this.onCreationStarted}>+</Button>
    );
  }

  render () {

    const { isCreating } = this.state;

    return (
      <div className={'notes-creation-item'}>
        { isCreating ? this.renderCreationForm() : this.renderToggleItem() }
      </div>
    );
  }

}
