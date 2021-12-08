import * as React from 'react';
import {
  GridColumns,
  GridRowsProp,
  DataGrid,
  GridSortDirection,
  GridValueGetterParams,
  GridSortModel,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clover from "./image/clover.png";
import diamond from "./image/diamond.png";
import heart from "./image/heart.png";
import spades from "./image/spades.png";
import rummy from "./image/rummy-iconss.png";
import Rotation from 'react-rotation'
import { Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Slide } from '@material-ui/core';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns: GridColumns = [
  { field: 'Slot_Id', type: 'number', headerClassName: 'super-app-theme--header',minWidth: 250,},
  { field: 'Slot_One',  headerClassName: 'super-app-theme--header', minWidth: 250,},
  { field: 'Slot_Two',  headerClassName: 'super-app-theme--header', minWidth: 250,},
  { field: 'Slot_Three',  headerClassName: 'super-app-theme--header', minWidth: 250,},
  {
    field: 'Time',headerClassName: 'super-app-theme--header',minWidth: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'time') || 'unknown'}`,
    width: 150,
  },
];
let rows = [
  {
    id: 1,
    Slot_Id: 1,
    Slot_One: '1',
    Slot_Two: '1',
    Slot_Three: '1',
    Time: '10.10',
  }
];

export default function Content() {

  const [open, setOpen] = React.useState(false);
  const [listrows, setListrow] = React.useState(rows);
  const [showimage, setShowimage] = React.useState(true);
  const [arrRummy, setArrRummy] = React.useState({
    imagearr:[{id:1,image:clover,name:'clover'},{id:2,image:diamond,name:'diamond'},{id:3,image:heart,name:'heart'},{id:4,image:spades,name:'spades'}]
  });
  const [state, setstate] = React.useState({
    checkstatus:false,
    speed: 2
  })

  function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
 
  var counter = 0;
  var amount = 0;

  var getimagearr = [];
  var i;
  const startgame = () => {
     amount=Number(localStorage.getItem('amount'));
    amount=amount-2;
    localStorage.setItem("amount",amount.toString());
    console.log(amount)
    setShowimage(true);
   setstate({checkstatus:true,speed: 2})
    counter = 0;
    i = setInterval(function(){
      var d = new Date(); // for now
    var hour=  d.getHours(); // => 9
    var mins=  d.getMinutes();
        counter++;
        if(counter === 10) {
          if(rows.length==1){
            rows = Object.assign([], rows);
          }
          rows.push({id:1,Slot_Id:1,Slot_One:arrRummy.imagearr[0].name,Slot_Two:arrRummy.imagearr[1].name,Slot_Three:arrRummy.imagearr[2].name,Time:hour+':'+mins}) 

          if(arrRummy.imagearr[0].id==arrRummy.imagearr[1].id && arrRummy.imagearr[1].id==arrRummy.imagearr[2].id){
            amount=Number(localStorage.getItem('amount'));
          amount=amount+2;
          localStorage.setItem("amount",amount.toString());
         }else if(arrRummy.imagearr[0].id==arrRummy.imagearr[1].id || arrRummy.imagearr[1].id==arrRummy.imagearr[2].id || arrRummy.imagearr[0].id==arrRummy.imagearr[2].id){
          amount=Number(localStorage.getItem('amount'));
          amount=amount+0.5;
          localStorage.setItem("amount",amount.toString());
         }else if(arrRummy.imagearr[0].id==1 && arrRummy.imagearr[1].id==1 && arrRummy.imagearr[2].id==1){
          amount=Number(localStorage.getItem('amount'));
          amount=amount+5;
          localStorage.setItem("amount",amount.toString());
         }
          setShowimage(false);
          setstate({checkstatus:false,speed: 2})
            clearInterval(i);
        }
    }, 200);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setShowimage(true);
    setOpen(false);
  };
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'Time',
      sort: 'asc' as GridSortDirection,
    },
  ]);

  return (
    <><><Box
      sx={{
        height: 300,
        width: '100%', marginTop: "76px",
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(255, 7, 0, 0.55)',
        },
      }}
    ><div style={{float: 'right',marginRight: 119}}>${localStorage.getItem('amount')}</div>
      <DataGrid sx={{ width: '100%' }}
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)} />
    </Box><Button variant="contained" onClick={handleClickOpen} color="secondary" style={{ margin: 10 }}>Start</Button></><div>

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle style={{ textAlign: "center" }}>{"CASINO"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div style={{ display: state.checkstatus === true ? "block" : "none" }}>
                <img style={{ animation: `spin ${state.speed}s linear infinite`, width: 300, height: 300 }} src={rummy} alt="img" />
              </div>
              <div style={{ display: showimage == false ? "block" : "none" }}>
                <img src={arrRummy.imagearr[0].image} style={{ width: 60, height: 60 }} />
                <img src={arrRummy.imagearr[1].image} style={{ width: 60, height: 60 }} />
                <img src={arrRummy.imagearr[2].image} style={{ width: 60, height: 60 }} />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={startgame}>Start</Button>
            <Button variant="contained" color="primary" onClick={handleClose}>Debug</Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div></>
  );
}