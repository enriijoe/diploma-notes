import { Bind, Consume } from 'dreamstate';
import * as React from 'react';
import { PureComponent } from 'react';

// Data.
import { notesContextManager, routerContextManager } from '@Data/store';

// View.
import { Button } from 'react-bootstrap';
import { default as DeleteIcon } from '@View/assets/icons/delete.svg';

import './MenuBar.Style.scss';

@Consume(notesContextManager, routerContextManager)
export class MenuBar extends PureComponent {

  state = {
    show: false,
    newTag: ''
  };

  @Bind()
  onToggleMenu() {

    const { show } = this.state;

    this.setState({
      show: !show,
      newTag: ''
    });
  }

  @Bind()
  onNewTagChanged(event) {
    this.setState({ newTag: event.target.value });
  }

  @Bind()
  onNewTagCreate() {

    const { notesActions } = this.props;
    const { newTag } = this.state;

    notesActions.createTagItem(newTag);
    this.setState({ newTag: '' });
  }

  @Bind()
  onNavigateToTag(tag) {

    const { routingActions } = this.props;

    routingActions.push(`/notes/${tag}`);
  }

  renderMenu() {

    const { notesState: { tags }, notesActions } = this.props;
    const { newTag } = this.state;

    return (
      <>
        <div className={'tags-panel'}>

          <div className={'tags-panel-addition-form'}>
            <input value={newTag} onChange={this.onNewTagChanged}/>
            <Button variant={'dark'} disabled={tags.includes(newTag)} onClick={this.onNewTagCreate}> Add </Button>
          </div>

          {
            tags.length
              ? <ul>
                <li className={'tags-panel-tag'} onClick={() => this.onNavigateToTag('')}>
                  <div> default </div>
                </li>
                {
                  tags.map((it, idx) => (
                    <li key={idx + it} className={'tags-panel-tag'}>
                      <div onClick={() => this.onNavigateToTag(it)}> { it } </div>
                      <DeleteIcon onClick={() => notesActions.removeTag(it)} width={12} height={12}/>
                     </li>
                  ))
                }
                </ul>
              : 'No tags...'
          }

        </div>
      </>
    );
  }

  render () {

    const { show } = this.state;

    return (
      <div className={'menu-bar'}>

        <Button variant={'outline-dark'} onClick={this.onToggleMenu}>
          { show ? '▲' : '▼' }
        </Button>

        { show ? this.renderMenu() : null }

      </div>
    );
  }

}
