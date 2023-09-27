import React from 'react';


class Synthetic extends React.Component {
  constructor() {
    super();
    this.state = { currentEvent: '---' };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({currentEvent: e.type})
  }


  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update} // коли починаємо щось вводити у textarea
          onCopy={this.update} // коли копіюємо вміст textarea
          onCut={this.update} // коли вирізаємо щось з textarea
          onPaste={this.update} // коли вставляємо у textarea
          onFocus={this.update} // коли клікаємо мишкою у textarea
          onBlur={this.update} // коли клікнули мишкою у textarea, а потім забрали курсор звідти і клікнули ще раз
          onDoubleClick={this.update} // коли клікаємо двічі
          onTouchStart={this.update} // коли доторкаємося до таачпаду по textarea
          onTouchMove={this.update} // коли розтягуємо textarea
          onTouchEnd={this.update} // коли перестаємо рухати
          cols='30'
          rows='10'
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

export default Synthetic;