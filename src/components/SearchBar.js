import React from 'react';

class SearchBar extends React.Component{

    state = { term: ''};

    onFormSubmit = e =>{
        e.preventDefault();

        this.props.whenSubmitted(this.state.term);
    }

    render(props){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                        <label>
                            Video Search...
                        </label>
                        <input 
                            type='text' 
                            onChange={e => this.setState({term: e.target.value})}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;