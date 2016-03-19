class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.searchEvent(this.refs.manatees.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" ref='manatees' type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

window.Search = Search;
