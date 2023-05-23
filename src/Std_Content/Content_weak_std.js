import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Content_weak_std() {
  return (
    <div class="col-xl-6 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="h4 text-xl font-weight-bold text-success text-uppercase mb-1">
                            약점 공략</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                    </div>
                    <div class="col-auto">
                        {/* <!-- <i class="fas fa-dollar-sign fa-2x text-gray-300"></i> --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Content_weak_std;