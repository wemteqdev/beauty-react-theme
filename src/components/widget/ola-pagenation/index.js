import React from 'react';
import assets from '../../assets';
import ReactPaginate from './react-paginate';
// import $ from 'jquery';

class OlaPagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total:this.props.total,
            current:this.props.current
        }
        this.onPageChange = this.onPageChange.bind(this);
        this.goFirstPage = this.goFirstPage.bind(this);
        this.goLastPage = this.goLastPage.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    onPageChange(page) {
        this.setState({
            current:page
        });
        this.props.onChange(page.selected);
    }

    goFirstPage() {
        const page = 0;
        this.setState({

            current:page
        });
        this.props.onChange(page);
    }

    goLastPage() {
        const page = this.state.total - 1;
        this.setState({
            current:page
        });
        this.props.onChange(page.selected);
    }

    render() {
        const nexticon = (  <span className = 'arrow-right'>
                                <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                            </span>)
        const preicon = (   <span className = 'arrow-left'>
                                <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                            </span>)
        const elips = (
                <div>
                    <span className = 'ola-oval-4'></span>
                    <span className = 'ola-oval-4'></span>
                    <span className = 'ola-oval-4'></span>
                </div>
        )

        const firsticon = (
            <div className = "first-page-btn" onClick = {this.goFirstPage}>
                <span className = 'arrow-first'>
                    <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                    <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                </span>
            </div>
        )

        const lasticon = (
            <div className = "last-page-btn" onClick = {this.goFirstPage}>
                <span className = 'arrow-last'>
                    <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                    <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                </span>
            </div>
        )

        // console.log("current:",this.state.current);
        return (
            <div className = 'ola-pagenation'>
                <ReactPaginate previousLabel={preicon}
                       firstLabel={firsticon}
                       lastLabel={lasticon}
                       nextLabel={nexticon}
                       breakLabel={elips}
                       breakClassName={"break-me"}
                       pageCount={this.state.total}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={3}
                       onPageChange={this.onPageChange}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}
                        />
            </div>
        );
    }
}

export default OlaPagination;