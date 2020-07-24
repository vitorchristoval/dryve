import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import DataTable, { createTheme } from 'react-data-table-component';


// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),

//         },

//     },
// }));

// const LinearIndeterminate = () => {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <LinearProgress />
//         </div>
//     );
// };


class List extends Component {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this)

        this.state = {

            data: [],
            loading: false,
            totalRows: 0,
            perPage: 10,
        };
    }
    async componentDidMount() {
        const { perPage } = this.state;

        this.setState({ loading: true });
        this.state.data = this.props.data
        this.state.colums = this.props.colums
        this.setState({ loading: false, totalRows: this.props.totalRows })
        this.forceUpdate();


    }
    async componentWillReceiveProps() {
        console.log(this.props)
        const { perPage } = this.state;

        this.setState({ loading: true });
        this.state.data = this.props.data
        this.state.colums = this.props.colums
        this.setState({ loading: false, totalRows: this.props.totalRows })
        this.forceUpdate();

        console.log(this.state.data)
    }

    handlePageChange = async page => {
        const { perPage } = this.state;
        console.log(page)
        this.setState({ loading: true });
        await this.props.handlePageChange(page)
        this.setState({ loading: false });
    }

    handlePerRowsChange = async (perPage, page) => {
        // this.setState({ loading: true });

        // const response = await axios.get(
        //     `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`,
        // );

        // this.setState({
        //     loading: false,
        //     data: response.data.data,
        //     perPage,
        // });
    }

    render() {
        const { loading, data, totalRows } = this.state;

        const paginationOptions = { rowsPerPageText: 'Itens por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

        const customStyles = {
            headRow: {
                style: {
                    border: 'none',
                    marginTop: '0px'
                },
            },
            headCells: {
                style: {
                    color: '#202124',
                    fontSize: '14px',
                },
            },
            cell: {
                style: {
                    border: 'none'
                },
            },
            rows: {
                style: {
                    border: 'none',
                },

            },
            pagination: {
                style: {
                    border: 'none',
                },
            },
        };

        return (
            <>
                <DataTable
                    columns={this.state.colums}
                    data={this.state.data}
                    customStyles={customStyles}
                    progressPending={loading}
                    pagination
                    selectableRows
                    paginationComponentOptions={paginationOptions}
                />

            </>
        );
    }
}

storiesOf('Pagination', module)
    .add('Server-Side', () => <List />);


export default List;
