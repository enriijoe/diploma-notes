import { Bind, Consume } from "dreamstate";
import * as React from "react";
import { PureComponent } from "react";

// View.
import { NotesCreationForm } from "@View/components/NotesCreationForm";
import { Button } from "react-bootstrap";

// Data.
import { notesContextManager } from "../../../data/store";

import "./NotesCreationItem.Style.scss";

@Consume(notesContextManager)
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
    onCreationFinished(noteItem) {

      const { notesActions: { createNoteItem } } = this.props;

      this.setState({
        isCreating: false
      });

      createNoteItem(noteItem);
    }

  renderCreationForm() {

    return (
      <NotesCreationForm onCancel={this.onCreationCancelled} onCreate={this.onCreationFinished}/>
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
