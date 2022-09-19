import React from 'react'

function PageContainer() {
  return (
    <>
    <div className="row">

<div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Bordered table</h4>
      <p className="card-description">
        Add class <code>.table-bordered</code>
      </p>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                First name
              </th>
              <th>
                Progress
              </th>
              <th>
                Amount
              </th>
              <th>
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                Herman Beck
              </td>
              <td>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ "width": "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td>
                $ 77.99
              </td>
              <td>
                May 15, 2015
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default PageContainer