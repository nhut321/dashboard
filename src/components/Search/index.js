import React from 'react'
import './Search.css'

export default function Search() {
  return (
    <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div id="sampleTable_filter" className="dataTables_filter">
                      <label>
                        Tìm kiếm:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="sampleTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
  )
}
