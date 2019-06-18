import React, { Component } from 'react'

export default class Recibo extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>
                {
                  this.props.data
                }
              </td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

