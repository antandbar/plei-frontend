import React, { Component } from 'react';
import './css/internalCardUserDetail.css';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { internalUserDetailService } from '../../views/internalUserDetail/InternalUserDetailService.js';
import { constNames } from '../../const/index';

export default class InternalCardUser extends Component {
  deleteUser = async e => {
    // Se elimina el usuarios interno seleccionado
    await internalUserDetailService.deleteUser(this.props.user.id_internal);
    // Se redireccionar a internalUserlist
    window.location.href = constNames.routeNames.internalUser;
  };

  cameBack = async e => {
    // Se redireccionar
    window.location.href = this.props.comeBack;
  };

  editUser = async e => {
    // Se redireccionar
    window.location.href = `${this.props.edit}/${this.props.user.id_internal}`;
  };

  render() {
    return (
      <Card body color="secondary" outline className="card-user">
        <CardTitle tag="h5" className="card-title">
          <span>
            Id: {this.props.user.id_internal} 
          </span>
        </CardTitle>
        <CardText className="card-text">
          <span>Blockchain:</span> {this.props?.user?.blockchain}
        </CardText>
        <CardText className="card-text">
          <span>Wallet Type:</span> {this.props?.user?.wallet_type}
        </CardText>
        <CardText className="card-text">
          <span>Wallet Name:</span> {this.props?.user?.wallet_name}
        </CardText>
        <CardText className="card-text">
          <span>Wallet Address: </span> {this.props?.user?.wallet_address}
        </CardText>
        <CardText className="card-text">
          <span>Discord Id: </span> {this.props?.user?.discord_id}
        </CardText>

        <Button className="btn-edit" onClick={this.editUser}>
          Editar
        </Button>

        <Button className="btn-delete" onClick={this.deleteUser}>
          Eliminar
        </Button>

        <Button className="btn-cameback" onClick={this.cameBack}>
          Volver
        </Button>
      </Card>
      /*       <Card body color="secondary" outline className="card-user">
        <CardTitle tag="h5" className="card-title">
          <span>
            Id: {this.props.user.id} - User: {this.props.user.username}
          </span>
        </CardTitle>
        <CardText className="card-text">
          <span>email:</span> {this.props.user.email}
        </CardText>
        <CardText className="card-text">
          <span>User Type:</span> {this.props.person.tipo_user}
        </CardText>
        <CardText className="card-text">
          <span>Wallet:</span> {this.props.person.wallet}
        </CardText>
        <CardText className="card-text">
          <span>Wallet Type: </span>
          {this.props.person.t_wallet}
        </CardText>

        <Button className="btn-edit" onClick={this.editUser}>
          Editar
        </Button>

        <Button className="btn-delete" onClick={this.deleteUser}>
          Eliminar
        </Button>

        <Button className="btn-cameback" onClick={this.cameBack}>
          Volver
        </Button>
      </Card> */
    );
  }
}
