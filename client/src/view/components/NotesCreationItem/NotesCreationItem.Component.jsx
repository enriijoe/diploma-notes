import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// View.
import { NotesForm } from '@View/components/NotesForm';
import { Button } from 'react-bootstrap';
import { default as AddIcon } from '@View/assets/icons/add.svg';

// Data.
import { notesContextManager } from '@Data/store';

import './NotesCreationItem.Style.scss';

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

    const { tag } = this.props;

    return (
      <NotesForm onCancel={this.onCreationCancelled} onConfirm={this.onCreationFinished} tag={tag}/>
    );
  }

  renderToggleItem() {

    return (
      <Button variant={'light'} onClick={this.onCreationStarted}> <AddIcon width={20} height={20}/> </Button>
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
