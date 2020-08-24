import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Todo.css';

export class Todo extends React.Component {

    render() {
        return (
            <Grid item xs={12} sm={6} md={3} mt={3} className="grid-item" >
                <Card className="card">
                    <CardContent>
                        <Typography>{this.props.text}</Typography>
                        <Typography>{this.props.priority}</Typography>
                        <Typography>{this.props.dueDate.format('DD-MM-YYYY')}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

}