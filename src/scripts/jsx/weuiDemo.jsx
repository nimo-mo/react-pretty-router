import React from 'react';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter, Button} = WeUI;

var items = {

};

var WeuiDemo = React.createClass({

	render: function() {
		return (
			<div>
				<div className="weui_panel">
            <div className="weui_panel_hd">小图文组合列表</div>
            <div className="weui_panel_bd">
                <div className="weui_media_box weui_media_small_appmsg">
                    <div className="weui_cells weui_cells_access">
                        <a className="weui_cell" href="javascript:;">
                          <div className="weui_cell_hd">
                          	<i className="fa fa-user"></i>
                          </div>
                          <div className="weui_cell_bd weui_cell_primary">
                              <p>文字标题</p>
                          </div>
                          <span className="weui_cell_ft"></span>
                        </a>
                        <a className="weui_cell" href="javascript:;">
                          <div className="weui_cell_hd">
                          </div>
                          <div className="weui_cell_bd weui_cell_primary">
                              <p>文字标题</p>
                          </div>
                          <span className="weui_cell_ft"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
			</div>
		);
	}

});

module.exports = WeuiDemo;