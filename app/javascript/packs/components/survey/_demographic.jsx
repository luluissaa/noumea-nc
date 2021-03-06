import React, { Component } from 'react'

export default class Demographic extends Component {
  constructor(props) {
    super(props);
    this.state = { livesInNoumea: false }
    this.handleChange = (e) => this._handleChange(e);
  }

  _handleChange(e) {
    this.setState({ livesInNoumea: e.currentTarget.checked });
  }

  render() {
    return(
      <div className={this.props.hide ? 'hide' : 'container' }>
        <div className='row'>
          <div className='col s12 l6'>
            <h2 className='margin-top-0 sm-padding-top-25'>Informations personnelles</h2>

            <div className='row'>
              <div className='col s12'>
                <label htmlFor='age'>Age</label>
                <input className='width-100' type='number' name='user[age]' id='age'/>
              </div>
            </div>

            <div className='row'>
              <div className='col s12'>
                <input type='checkbox' id='vivez' name='user[lives_in_noumea]' onChange={this.handleChange} checked={this.state.livesInNoumea} />
                <label htmlFor='vivez'>Vivez-vous à Nouméa?</label>
              </div>
            </div>

            {
              this.state.livesInNoumea &&
              <div className='row'>
                <div className='col s12 m8'>
                  <label htmlFor='quartier'>Votre quartier</label>
                  <input type='text' id='quartier' name='user[neighboorhood]'/>
                </div>
              </div>
            }

            {
              this.state.livesInNoumea &&
              <div className='row'>
                <div className='col s12 m8'>
                  <label htmlFor='combien'>Cela fait combien de temps que vous vivez dans votre quartier?</label>
                  <input placeholder='2 ans' type='text' id='combien' name='user[months_lived_in_noumea]'/>
                </div>
              </div>
            }

            <div className='row'>
              <div className='col s12 m8'>
                <label htmlFor='email'>Votre email</label>
                <input type='text' id='email' name='user[email]'/>
              </div>
            </div>

            <div className='row'>
              <div className='col s12'>
                <input type='checkbox' id='recevoir' name='user[enable_receive_emails]'/>
                <label htmlFor='recevoir'>Recevoir des mises à jour concernant ce projet</label>
              </div>
            </div>

            <div className='row'>
              <div className='col s12'>
                <a href='#' onClick={this.props.onSubmit} className='btn'>soumettre</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}
