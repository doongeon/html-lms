import React from 'react';

function Card(content, head_color, font_color) {
    return (
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="h4 text-xl font-weight-bold text-primary text-uppercase mb-1">
                            {content}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                    </div>
                    <div class="col-auto">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;