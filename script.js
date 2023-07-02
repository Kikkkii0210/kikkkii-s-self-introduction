@import "compass/css3";

body {
  margin: 15px;
}

/* text recolor */
h1, a {
  color: #4DC9C9 !important;
}
h3{
  color:#102590 !important;
}
p{
  color:#1EAFD5 !important;
}
ul li{
  display:block;
  font-size:18px;
  line-height: 25px;
  color: #1EAFD5 !important;
  margin-left:0;
}

time{
  color:#1E69D5;
}

/* button recolor */
.nav-pills > li.active > a, .btn-primary {
  background-color: #6C6C6C !important;
  // feeling like it's a rounded corners kind of day
  border-color: #6C6C6C !important;
  border-radius: 25px; 
}

.sf{
  float:right;
  vertical-align:top;
  margin:5px;
  border-style:groove;
  border-width:5px;
  border-color:#C9EDF6;
}

dialog{
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
}
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.1);
}

*{
				padding: 0;
				margin: 0;
				box-sizing: border-box;
}
.container{
  margin: 30px auto;
}
.line{
  padding: 5px 0 5px 30px;
  border-left: 3px solid #5ACFD6;
}
.p1{
  text-align: center;
  width:250px;
  padding: 10px;
  border:1px solid #5ACFD6;
  color: #03254a;
  margin: 20px 0;
  position: relative;
}
.p1:before{
  content: '';
  position: absolute;
  left: -40px;
  top: 7px;
  width: 10px;
  height: 10px;
  border: 3px solid #D2FAFB;
  border-radius: 50%;
  background-color: #5ACFD6;
}
.p1:after{
  content: '';
  position: absolute;
  left: -18px;
  top: 7px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 10px solid #5ACFD6;
}
