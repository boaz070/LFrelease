define(
	
	{<bmp_begin>
name: Davis
head: sprite\sys\davis_f.bmp
small: sprite\sys\davis_s.bmp
file(0-69): sprite\sys\davis_0.bmp  w: 79  h: 79  row: 10  col: 7
file(70-139): sprite\sys\davis_1.bmp  w: 79  h: 79  row: 10  col: 7
file(140-209): sprite\sys\davis_2.bmp  w: 79  h: 79  row: 10  col: 7
walking_frame_rate 3
walking_speed 5.000000
walking_speedz 2.500000
running_frame_rate 3
running_speed 10.000000
running_speedz 1.600000
heavy_walking_speed 3.700000
heavy_walking_speedz 1.850000
heavy_running_speed 6.200000
heavy_running_speedz 1.000000
jump_height -16.299999
jump_distance 10.000000
jump_distancez 3.750000
dash_height -10.000000
dash_distance 18.000000
dash_distancez 5.000000
rowing_height -2.000000
rowing_distance 5.000000
<bmp_end>

<frame> 0 standing
   pic: 0  state: 0  wait: 5  next: 1  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 55  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 1 standing
   pic: 1  state: 0  wait: 3  next: 2  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 54  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 2 standing
   pic: 2  state: 0  wait: 5  next: 3  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 3 standing
   pic: 3  state: 0  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 5 walking
   pic: 4  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 6 walking
   pic: 5  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 26  y: 54  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 7 walking
   pic: 6  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 52  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 8 walking
   pic: 7  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 52  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 9 running
   pic: 20  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
  sound: data\003.wav 
   bpoint:
      x: 49  y: 39
   bpoint_end:
   wpoint:
      kind: 1  x: 58  y: 50  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 10 running
   pic: 21  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 49  y: 38
   bpoint_end:
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 11 running
   pic: 22  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
  sound: data\004.wav 
   bpoint:
      x: 45  y: 37
   bpoint_end:
   wpoint:
      kind: 1  x: 26  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 12 heavy_obj_walk
   pic: 23  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 22  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 13 heavy_obj_walk
   pic: 24  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 22  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 14 heavy_obj_walk
   pic: 25  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 15 heavy_obj_walk
   pic: 26  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 16 heavy_obj_run
   pic: 125  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\003.wav 
   bpoint:
      x: 38  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 37  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 17 heavy_obj_run
   pic: 126  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 35
   bpoint_end:
   wpoint:
      kind: 1  x: 42  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 18 heavy_obj_run
   pic: 127  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\004.wav 
   bpoint:
      x: 38  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 19 heavy_stop_run
   pic: 128  state: 15  wait: 7  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   bpoint:
      x: 38  y: 35
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 28  y: 16  w: 27  h: 64
   bdy_end:
<frame_end>

<frame> 20 normal_weapon_atck
   pic: 70  state: 3  wait: 1  next: 21  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 36  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 33  y: 10  w: 26  h: 67
   bdy_end:
<frame_end>

<frame> 21 normal_weapon_atck
   pic: 71  state: 3  wait: 1  next: 22  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 18  y: 32  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 31  y: 8  w: 29  h: 71
   bdy_end:
<frame_end>

<frame> 22 normal_weapon_atck
   pic: 72  state: 3  wait: 1  next: 23  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 60  y: 51  weaponact: 23  attacking: 1  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 11  w: 36  h: 68
   bdy_end:
<frame_end>

<frame> 23 normal_weapon_atck
   pic: 73  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 58  y: 55  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 9  w: 36  h: 66
   bdy_end:
   bdy:
      kind: 0  x: 25  y: 61  w: 17  h: 18
   bdy_end:
<frame_end>

<frame> 25 normal_weapon_atck
   pic: 74  state: 3  wait: 1  next: 26  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 46  y: 33  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 11  w: 30  h: 69
   bdy_end:
<frame_end>

<frame> 26 normal_weapon_atck
   pic: 75  state: 3  wait: 1  next: 27  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 60  y: 35  weaponact: 33  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 11  w: 31  h: 69
   bdy_end:
<frame_end>

<frame> 27 normal_weapon_atck
   pic: 76  state: 3  wait: 1  next: 28  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 64  y: 51  weaponact: 24  attacking: 1  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 10  w: 36  h: 71
   bdy_end:
<frame_end>

<frame> 28 normal_weapon_atck
   pic: 77  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 13  y: 43  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 11  w: 34  h: 68
   bdy_end:
<frame_end>

<frame> 30 jump_weapon_atck
   pic: 80  state: 3  wait: 1  next: 31  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 77  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 31  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 7  w: 32  h: 58
   bdy_end:
<frame_end>

<frame> 31 jump_weapon_atck
   pic: 81  state: 3  wait: 1  next: 32  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 26  weaponact: 34  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 27  y: 8  w: 34  h: 59
   bdy_end:
<frame_end>

<frame> 32 jump_weapon_atck
   pic: 82  state: 3  wait: 1  next: 33  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 63  y: 45  weaponact: 24  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 35  w: 28  h: 35
   bdy_end:
   bdy:
      kind: 0  x: 29  y: 12  w: 26  h: 38
   bdy_end:
<frame_end>

<frame> 33 jump_weapon_atck
   pic: 83  state: 3  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 48  weaponact: 25  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 30  w: 28  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 26  y: 9  w: 26  h: 37
   bdy_end:
<frame_end>

<frame> 35 run_weapon_atck
   pic: 84  state: 3  wait: 1  next: 36  dvx: 6  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 44  y: 34  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 15  w: 31  h: 65
   bdy_end:
<frame_end>

<frame> 36 run_weapon_atck
   pic: 85  state: 3  wait: 2  next: 37  dvx: 4  dvy: 0  dvz: 0  centerx: 38  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 63  y: 52  weaponact: 24  attacking: 3  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 15  w: 34  h: 65
   bdy_end:
<frame_end>

<frame> 37 run_weapon_atck
   pic: 86  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 45  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 15  y: 43  weaponact: 25  attacking: 3  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 38 super_punch
   pic: 39  state: 3  wait: 2  next: 39  dvx: 1  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 40  y: 4  w: 32  h: 44  dvx: 7  dvy: -13  fall: 70  arest: 15  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 29  y: 6  w: 23  h: 72
   bdy_end:
<frame_end>

<frame> 39 super_punch
   pic: 49  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   bdy:
      kind: 0  x: 22  y: 13  w: 34  h: 68
   bdy_end:
<frame_end>

<frame> 40 dash_weapon_atck
   pic: 90  state: 3  wait: 1  next: 41  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 17  y: 29  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 10  w: 35  h: 52
   bdy_end:
<frame_end>

<frame> 41 dash_weapon_atck
   pic: 91  state: 3  wait: 1  next: 42  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 26  weaponact: 34  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 31  w: 30  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 23  y: 8  w: 34  h: 33
   bdy_end:
<frame_end>

<frame> 42 dash_weapon_atck
   pic: 92  state: 3  wait: 1  next: 43  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 63  y: 45  weaponact: 24  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 35  w: 27  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 13  w: 30  h: 33
   bdy_end:
<frame_end>

<frame> 43 dash_weapon_atck
   pic: 93  state: 3  wait: 8  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 49  weaponact: 25  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 39  w: 33  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 23  y: 13  w: 31  h: 37
   bdy_end:
<frame_end>

<frame> 45 light_weapon_thw
   pic: 94  state: 15  wait: 3  next: 46  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 17  y: 35  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 11  w: 32  h: 68
   bdy_end:
   bdy:
      kind: 0  x: 17  y: 40  w: 24  h: 10
   bdy_end:
<frame_end>

<frame> 46 light_weapon_thw
   pic: 95  state: 15  wait: 1  next: 47  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 15  y: 30  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 32  y: 8  w: 27  h: 71
   bdy_end:
<frame_end>

<frame> 47 light_weapon_thw
   pic: 96  state: 15  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 107  y: 60  weaponact: 35  attacking: 0  cover: 0  dvx: 19  dvy: -4  dvz: 3 
   wpoint_end:
   bdy:
      kind: 0  x: 17  y: 18  w: 48  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 49  w: 23  h: 29
   bdy_end:
<frame_end>

<frame> 50 heavy_weapon_thw
   pic: 27  state: 15  wait: 4  next: 51  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 33  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 7  w: 22  h: 73
   bdy_end:
<frame_end>

<frame> 51 heavy_weapon_thw
   pic: 28  state: 15  wait: 7  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 27  centery: 77  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 104  y: 36  weaponact: 10  attacking: 0  cover: 0  dvx: 13  dvy: -5  dvz: 2 
   wpoint_end:
   bdy:
      kind: 0  x: 8  y: 39  w: 61  h: 23
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 52 sky_lgt_wp_thw
   pic: 97  state: 15  wait: 3  next: 53  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 28  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 28  y: 4  w: 31  h: 63
   bdy_end:
<frame_end>

<frame> 53 sky_lgt_wp_thw
   pic: 98  state: 15  wait: 1  next: 54  dvx: 0  dvy: -2  dvz: 0  centerx: 41  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 25  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 35  y: 10  w: 36  h: 23
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 30  w: 32  h: 39
   bdy_end:
<frame_end>

<frame> 54 sky_lgt_wp_thw
   pic: 99  state: 15  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 67  y: 71  weaponact: 23  attacking: 0  cover: 0  dvx: 16  dvy: 8  dvz: 3 
   wpoint_end:
   bdy:
      kind: 0  x: 22  y: 15  w: 38  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 37  w: 26  h: 29
   bdy_end:
<frame_end>

<frame> 55 weapon_drink
   pic: 107  state: 17  wait: 3  next: 56  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
  sound: data\042.wav 
   wpoint:
      kind: 1  x: 56  y: 24  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 56 weapon_drink
   pic: 108  state: 17  wait: 3  next: 57  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 23  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 57 weapon_drink
   pic: 109  state: 17  wait: 3  next: 58  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 54  y: 22  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 58 weapon_drink
   pic: 108  state: 17  wait: 3  next: 55  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 23  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 60 punch
   pic: 10  state: 3  wait: 1  next: 61  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 2  x: 27  y: 57  w: 36  h: 25  vrest: 1  
      
   itr_end:
   bdy:
      kind: 0  x: 28  y: 12  w: 33  h: 70
   bdy_end:
<frame_end>

<frame> 61 punch
   pic: 11  state: 3  wait: 1  next: 62  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   itr:
      kind: 0  x: 21  y: 31  w: 43  h: 18  dvx: 2  bdefend: 16  injury: 20  
   itr_end:
   bdy:
      kind: 0  x: 13  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 62 punch
   pic: 12  state: 3  wait: 1  next: 63  dvx: 2  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 9  w: 31  h: 72
   bdy_end:
<frame_end>

<frame> 63 punch
   pic: 13  state: 3  wait: 1  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 29  y: 10  w: 32  h: 70
   bdy_end:
<frame_end>

<frame> 65 punch
   pic: 14  state: 3  wait: 1  next: 66  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 2  x: 25  y: 58  w: 37  h: 21  vrest: 1  
      
   itr_end:
   bdy:
      kind: 0  x: 26  y: 12  w: 27  h: 68
   bdy_end:
<frame_end>

<frame> 66 punch
   pic: 15  state: 3  wait: 1  next: 67  dvx: 0  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   itr:
      kind: 0  x: 23  y: 38  w: 41  h: 15  dvx: 2  bdefend: 16  injury: 20  
   itr_end:
   bdy:
      kind: 0  x: 13  y: 11  w: 32  h: 67
   bdy_end:
<frame_end>

<frame> 67 punch
   pic: 16  state: 3  wait: 1  next: 68  dvx: 2  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 15  w: 37  h: 64
   bdy_end:
<frame_end>

<frame> 68 punch
   pic: 17  state: 3  wait: 1  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 28  y: 9  w: 32  h: 72
   bdy_end:
<frame_end>

<frame> 70 super_punch
   pic: 67  state: 3  wait: 2  next: 71  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 25  y: 16  w: 30  h: 61
   bdy_end:
<frame_end>

<frame> 71 super_punch
   pic: 68  state: 3  wait: 1  next: 72  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 14  w: 34  h: 66
   bdy_end:
<frame_end>

<frame> 72 super_punch
   pic: 8  state: 3  wait: 2  next: 73  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 40  y: 5  w: 35  h: 45  dvx: 3  dvy: -10  fall: 70  arest: 15  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 26  y: 12  w: 35  h: 66
   bdy_end:
<frame_end>

<frame> 73 super_punch
   pic: 9  state: 3  wait: 1  next: 74  dvx: 5  dvy: 0  dvz: 0  centerx: 27  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 23  y: 10  w: 29  h: 69
   bdy_end:
<frame_end>

<frame> 74 super_punch
   pic: 19  state: 3  wait: 2  next: 75  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 15  w: 41  h: 65
   bdy_end:
<frame_end>

<frame> 75 super_punch
   pic: 29  state: 3  wait: 1  next: 38  dvx: 6  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 24  y: 10  w: 34  h: 69
   bdy_end:
<frame_end>

<frame> 79 jump_attack
   pic: 137  state: 3  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 6  w: 29  h: 58
   bdy_end:
<frame_end>

<frame> 80 jump_attack
   pic: 132  state: 3  wait: 1  next: 81  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 10  w: 35  h: 57
   bdy_end:
<frame_end>

<frame> 81 jump_attack
   pic: 133  state: 3  wait: 1  next: 82  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 22  y: 9  w: 35  h: 56
   bdy_end:
<frame_end>

<frame> 82 jump_attack
   pic: 134  state: 3  wait: 1  next: 83  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 24  y: 6  w: 29  h: 60
   bdy_end:
<frame_end>

<frame> 83 jump_attack
   pic: 135  state: 3  wait: 3  next: 84  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 70  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 17  y: 37  w: 52  h: 17  dvx: 9  dvy: -5  fall: 70  arest: 15  bdefend: 30  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 2  w: 29  h: 63
   bdy_end:
<frame_end>

<frame> 84 jump_attack
   pic: 136  state: 3  wait: 1  next: 79  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 32  y: 40  w: 36  h: 16  dvx: 9  dvy: -5  fall: 70  arest: 15  bdefend: 30  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 5  w: 28  h: 63
   bdy_end:
<frame_end>

<frame> 85 run_attack
   pic: 100  state: 3  wait: 2  next: 86  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 25  w: 44  h: 54
   bdy_end:
<frame_end>

<frame> 86 run_attack
   pic: 101  state: 3  wait: 1  next: 87  dvx: 16  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 25  y: 24  w: 31  h: 55
   bdy_end:
<frame_end>

<frame> 87 run_attack
   pic: 102  state: 3  wait: 1  next: 88  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 79  hit_a: 89  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: -18  y: 24  w: 88  h: 30  dvx: 20  fall: 70  vrest: 7  bdefend: 60  injury: 55  
   itr_end:
   bdy:
      kind: 0  x: 15  y: 19  w: 37  h: 62
   bdy_end:
<frame_end>

<frame> 88 run_attack
   pic: 103  state: 3  wait: 3  next: 89  dvx: 0  dvy: 0  dvz: 0  centerx: 20  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 28  y: 25  w: 43  h: 27  dvx: 17  fall: 70  vrest: 10  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 14  y: 14  w: 43  h: 67
   bdy_end:
<frame_end>

<frame> 89 run_attack
   pic: 104  state: 3  wait: 2  next: 97  dvx: 0  dvy: 0  dvz: 0  centerx: 20  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 14  y: 14  w: 43  h: 67
   bdy_end:
<frame_end>

<frame> 90 dash_attack
   pic: 132  state: 3  wait: 1  next: 91  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 10  w: 35  h: 57
   bdy_end:
<frame_end>

<frame> 91 dash_attack
   pic: 133  state: 3  wait: 1  next: 92  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 22  y: 9  w: 35  h: 56
   bdy_end:
<frame_end>

<frame> 92 dash_attack
   pic: 134  state: 3  wait: 1  next: 93  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 24  y: 6  w: 29  h: 60
   bdy_end:
<frame_end>

<frame> 93 dash_attack
   pic: 135  state: 3  wait: 7  next: 94  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 70  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 17  y: 37  w: 52  h: 17  dvx: 14  dvy: -5  fall: 70  arest: 9  bdefend: 60  injury: 80  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 2  w: 29  h: 63
   bdy_end:
<frame_end>

<frame> 94 dash_attack
   pic: 136  state: 3  wait: 1  next: 96  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 32  y: 40  w: 36  h: 16  dvx: 14  dvy: -5  fall: 70  arest: 9  bdefend: 60  injury: 80  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 5  w: 28  h: 63
   bdy_end:
<frame_end>

<frame> 95 dash_defend
   pic: 111  state: 7  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 21  y: 27  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 14  y: 19  w: 28  h: 36
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 37  w: 24  h: 34
   bdy_end:
<frame_end>

<frame> 96 dash_attack
   pic: 137  state: 3  wait: 3  next: 96  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 6  w: 29  h: 58
   bdy_end:
<frame_end>

<frame> 97 run_attack
   pic: 105  state: 3  wait: 2  next: 98  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 98 run_attack
   pic: 106  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 100 rowing
   pic: 66  state: 6  wait: 2  next: 101  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 21  y: 41  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 101 rowing
   pic: 65  state: 6  wait: 6  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 34  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 102 rowing
   pic: 58  state: 6  wait: 2  next: 103  dvx: 9  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 38  y: 75  weaponact: 22  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 103 rowing
   pic: 59  state: 6  wait: 2  next: 104  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 43  y: 47  weaponact: 31  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 104 rowing
   pic: 69  state: 6  wait: 2  next: 105  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 20  y: 61  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 105 rowing
   pic: 58  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 35  y: 74  weaponact: 22  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 106 rowing
   pic: 59  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 44  y: 48  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 293  y: 198  w: 1  h: 1  vrest: 1  
   itr_end:
<frame_end>

<frame> 107 rowing
   pic: 69  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 20  y: 59  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 108 rowing
   pic: 117  state: 6  wait: 3  next: 109  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 44  y: 52  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 109 rowing
   pic: 118  state: 6  wait: 6  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 43  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 110 defend
   pic: 56  state: 7  wait: 12  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   wpoint:
      kind: 1  x: 41  y: 40  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 111 defend
   pic: 57  state: 7  wait: 0  next: 110  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 41  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 19  w: 42  h: 60
   bdy_end:
<frame_end>

<frame> 112 broken_defend
   pic: 46  state: 8  wait: 1  next: 113  dvx: -2  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 37  y: 53  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 113 broken_defend
   pic: 47  state: 8  wait: 2  next: 114  dvx: -2  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 23  y: 57  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 114 broken_defend
   pic: 48  state: 8  wait: 3  next: 999  dvx: -2  dvy: 0  dvz: 0  centerx: 43  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 43  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 115 picking_light
   pic: 36  state: 15  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   wpoint:
      kind: 1  x: 34  y: 75  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 32  y: 24  w: 28  h: 28
   bdy_end:
<frame_end>

<frame> 116 picking_heavy
   pic: 36  state: 15  wait: 2  next: 117  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   wpoint:
      kind: 1  x: 42  y: 79  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 36  y: 26  w: 26  h: 25
   bdy_end:
<frame_end>

<frame> 117 picking_heavy
   pic: 36  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 75  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 34  y: 19  w: 26  h: 37
   bdy_end:
<frame_end>

<frame> 120 catching
   pic: 51  state: 9  wait: 2  next: 121  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\015.wav 
   cpoint:
      kind: 1  x: 61  y: 39
      vaction: 131  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 7 
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 121 catching
   pic: 50  state: 9  wait: 0  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Da: 274
   cpoint:
      kind: 1  x: 64  y: 35
      vaction: 130  aaction: 122  taction: -232  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: -7 
   cpoint_end:
   wpoint:
      kind: 1  x: 47  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 122 catching
   pic: 51  state: 9  wait: 5  next: 123  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 1  x: 61  y: 35
      vaction: 130  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 7 
   cpoint_end:
   wpoint:
      kind: 1  x: 34  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 123 catching
   pic: 52  state: 9  wait: 4  next: 121  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\014.wav 
   cpoint:
      kind: 1  x: 52  y: 36
      injury: 15  vaction: 132  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 3 
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 46  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 130 picked_caught
   pic: 53  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 42  y: 39
      fronthurtact: 132 backhurtact: 131 
   cpoint_end:
   wpoint:
      kind: 1  x: 28  y: 54  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 131 picked_caught
   pic: 54  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 43  y: 39
      fronthurtact: 132 backhurtact: 132 
   cpoint_end:
   wpoint:
      kind: 1  x: 25  y: 49  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 132 picked_caught
   pic: 55  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 41  y: 39
      fronthurtact: 131 backhurtact: 131 
   cpoint_end:
   wpoint:
      kind: 1  x: 42  y: 43  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 133 picked_caught
   pic: 30  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 33  y: 36
      
   cpoint_end:
   wpoint:
      kind: 1  x: 37  y: 45  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 134 picked_caught
   pic: 31  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 83  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 30  y: 37
      
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 28  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 135 picked_caught
   pic: 32  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 35  y: 22
      
   cpoint_end:
   wpoint:
      kind: 1  x: 39  y: 47  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 136 picked_caught
   pic: 33  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 35  y: 37
      
   cpoint_end:
   wpoint:
      kind: 1  x: 48  y: 44  weaponact: 34  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 137 picked_caught
   pic: 34  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 28  y: 59
      
   cpoint_end:
   wpoint:
      kind: 1  x: 38  y: 75  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 138 picked_caught
   pic: 35  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 31  y: 51
      
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 73  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 139 picked_caught
   pic: 40  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 45  y: 32
      
   cpoint_end:
   wpoint:
      kind: 1  x: 32  y: 47  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 140 picked_caught
   pic: 41  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 40  y: 39
      
   cpoint_end:
   wpoint:
      kind: 1  x: 42  y: 38  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 141 picked_caught
   pic: 42  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 44  y: 40
      
   cpoint_end:
   wpoint:
      kind: 1  x: 47  y: 46  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 142 picked_caught
   pic: 43  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 46  y: 51
      
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 63  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 143 picked_caught
   pic: 44  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 45  y: 66
      
   cpoint_end:
   wpoint:
      kind: 1  x: 56  y: 75  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 144 picked_caught
   pic: 45  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 42  y: 55
      
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 72  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 180 falling
   pic: 30  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 44  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 21  y: 14  w: 29  h: 44  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 25  y: 25  w: 21  h: 20
   bdy_end:
<frame_end>

<frame> 181 falling
   pic: 31  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 85  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 27  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 8  y: 15  w: 30  h: 32  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 27  y: 35  w: 28  h: 21  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 20  w: 24  h: 23
   bdy_end:
<frame_end>

<frame> 182 falling
   pic: 32  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 37  y: 47  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 13  y: 18  w: 46  h: 26  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 27  y: 22  w: 20  h: 18
   bdy_end:
<frame_end>

<frame> 183 falling
   pic: 33  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 49  y: 44  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 32  y: 18  w: 33  h: 27  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 10  y: 38  w: 38  h: 21  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 30  w: 27  h: 21
   bdy_end:
<frame_end>

<frame> 184 falling
   pic: 34  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 66  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 72  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 185 falling
   pic: 35  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 35  y: 73  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 186 falling
   pic: 40  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 29  y: 47  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 22  y: 12  w: 36  h: 50  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 31  y: 24  w: 25  h: 23
   bdy_end:
<frame_end>

<frame> 187 falling
   pic: 41  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 39  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 33  y: 6  w: 26  h: 46  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 26  y: 43  w: 21  h: 29  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 27  w: 24  h: 26
   bdy_end:
<frame_end>

<frame> 188 falling
   pic: 42  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 48  y: 45  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 14  y: 29  w: 58  h: 23  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 30  y: 31  w: 24  h: 21
   bdy_end:
<frame_end>

<frame> 189 falling
   pic: 43  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 63  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 24  y: 27  w: 26  h: 28  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 37  y: 45  w: 31  h: 28  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 30  y: 39  w: 23  h: 21
   bdy_end:
<frame_end>

<frame> 190 falling
   pic: 44  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 53  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 191 falling
   pic: 45  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 73  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 200 ice
   pic: 37  state: 15  wait: 2  next: 201  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 45  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 201 ice
   pic: 38  state: 13  wait: 90  next: 202  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 20  y: 55  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 14  x: 10  y: 9  w: 55  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 202 ice
   pic: 37  state: 15  wait: 1  next: 182  dvx: -4  dvy: -3  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 44  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 203 fire
   pic: 78  state: 18  wait: 1  next: 204  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 46  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 204 fire
   pic: 79  state: 18  wait: 1  next: 203  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 46  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 205 fire
   pic: 88  state: 18  wait: 1  next: 206  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 33  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 206 fire
   pic: 89  state: 18  wait: 1  next: 205  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 33  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 207 tired
   pic: 69  state: 15  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 64  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 44  y: 28  w: 22  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 47  w: 28  h: 35
   bdy_end:
<frame_end>

<frame> 210 jump
   pic: 60  state: 4  wait: 1  next: 211  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 63  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 22  y: 24  w: 35  h: 58
   bdy_end:
<frame_end>

<frame> 211 jump
   pic: 61  state: 4  wait: 1  next: 212  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 43  y: 64  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 26  w: 34  h: 56
   bdy_end:
<frame_end>

<frame> 212 jump
   pic: 62  state: 4  wait: 1  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 38  y: 28
   bpoint_end:
   wpoint:
      kind: 1  x: 33  y: 36  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 11  w: 29  h: 61
   bdy_end:
<frame_end>

<frame> 213 dash
   pic: 63  state: 5  wait: 8  next: 216  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 36  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 43  y: 5  w: 23  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 29  w: 21  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 18  y: 48  w: 27  h: 21
   bdy_end:
<frame_end>

<frame> 214 dash
   pic: 64  state: 5  wait: 8  next: 217  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 33  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 30  y: 40  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 5  w: 27  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 16  y: 37  w: 36  h: 22
   bdy_end:
<frame_end>

<frame> 215 crouch
   pic: 60  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\012.wav 
   bpoint:
      x: 42  y: 55
   bpoint_end:
   wpoint:
      kind: 1  x: 45  y: 60  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 31  h: 54
   bdy_end:
<frame_end>

<frame> 216 dash
   pic: 112  state: 5  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 35  y: 36  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 35  y: 8  w: 27  h: 27
   bdy_end:
   bdy:
      kind: 0  x: 16  y: 30  w: 39  h: 37
   bdy_end:
<frame_end>

<frame> 217 dash
   pic: 113  state: 5  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 33  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 29  y: 39  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 13  w: 29  h: 51
   bdy_end:
<frame_end>

<frame> 218 stop_running
   pic: 114  state: 15  wait: 5  next: 999  dvx: 1  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   bpoint:
      x: 39  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 41  y: 43  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 17  y: 25  w: 30  h: 55
   bdy_end:
   bdy:
      kind: 0  x: 45  y: 47  w: 16  h: 32
   bdy_end:
<frame_end>

<frame> 219 crouch2
   pic: 60  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\012.wav 
   wpoint:
      kind: 1  x: 46  y: 61  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 36  w: 29  h: 44
   bdy_end:
<frame_end>

<frame> 220 injured
   pic: 120  state: 11  wait: 2  next: 221  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 55  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 17  w: 29  h: 61
   bdy_end:
<frame_end>

<frame> 221 injured
   pic: 121  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 51  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 32  y: 16  w: 27  h: 63
   bdy_end:
   bdy:
      kind: 0  x: 22  y: 37  w: 26  h: 42
   bdy_end:
<frame_end>

<frame> 222 injured
   pic: 123  state: 11  wait: 2  next: 223  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 41  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 11  y: 24  w: 39  h: 31
   bdy_end:
   bdy:
      kind: 0  x: 25  y: 53  w: 40  h: 27
   bdy_end:
<frame_end>

<frame> 223 injured
   pic: 124  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 43  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 46  y: 41  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 12  y: 23  w: 40  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 56  w: 36  h: 24
   bdy_end:
<frame_end>

<frame> 224 injured
   pic: 130  state: 11  wait: 2  next: 225  dvx: 0  dvy: 0  dvz: 0  centerx: 43  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 23  y: 55  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 13  w: 30  h: 65
   bdy_end:
<frame_end>

<frame> 225 injured
   pic: 131  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 54  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 18  w: 35  h: 63
   bdy_end:
<frame_end>

<frame> 226 injured
   pic: 120  state: 16  wait: 6  next: 227  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 51  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 27  y: 22  w: 42  h: 58
   bdy_end:
<frame_end>

<frame> 227 injured
   pic: 122  state: 16  wait: 6  next: 228  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 50  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 24  w: 39  h: 57
   bdy_end:
<frame_end>

<frame> 228 injured
   pic: 121  state: 16  wait: 6  next: 229  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 44  y: 50  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 23  w: 37  h: 58
   bdy_end:
<frame_end>

<frame> 229 injured
   pic: 122  state: 16  wait: 6  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 47  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 29  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 230 lying
   pic: 34  state: 14  wait: 30  next: 219  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 73  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 74  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 231 lying
   pic: 44  state: 14  wait: 30  next: 219  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 232 throw_lying_man
   pic: 27  state: 9  wait: 3  next: 233  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 1  x: 28  y: 9
      vaction: 135  throwvz: -842150451  throwinjury: -842150451 dircontrol: 1 
   cpoint_end:
   wpoint:
      kind: 1  x: 27  y: 16  weaponact: 31  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 15  w: 36  h: 65
   bdy_end:
<frame_end>

<frame> 233 throw_lying_man
   pic: 28  state: 9  wait: 1  next: 234  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   cpoint:
      kind: 1  x: 72  y: 53
      vaction: 181  throwvx: 13  throwvy: -7  throwvz: 3  throwinjury: 30 
   cpoint_end:
   wpoint:
      kind: 1  x: 55  y: 67  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 28  w: 61  h: 28
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 234 throw_lying_man
   pic: 28  state: 9  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 67  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 13  y: 30  w: 57  h: 28
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 240 ball1
   pic: 140  state: 3  wait: 1  next: 241  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 241 ball1
   pic: 141  state: 3  wait: 1  next: 242  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 242 ball1
   pic: 142  state: 3  wait: 1  next: 243  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 243 ball1
   pic: 143  state: 3  wait: 1  next: 244  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 244 ball1
   pic: 144  state: 3  wait: 1  next: 246  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 43  action: 0  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 30  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 245 ball1
   pic: 145  state: 3  wait: 1  next: 246  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 246 ball1
   pic: 146  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 247  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 247 ball2
   pic: 146  state: 3  wait: 1  next: 248  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 248 ball2
   pic: 147  state: 3  wait: 1  next: 249  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 249 ball2
   pic: 148  state: 3  wait: 1  next: 250  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 31  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 250 ball2
   pic: 149  state: 3  wait: 1  next: 252  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 40  action: 60  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 22  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 251 ball2
   pic: 146  state: 3  wait: 1  next: 252  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 252 ball2
   pic: 145  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 253  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 253 ball3
   pic: 145  state: 3  wait: 1  next: 254  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 254 ball3
   pic: 142  state: 3  wait: 1  next: 255  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 255 ball3
   pic: 143  state: 3  wait: 1  next: 256  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 256 ball3
   pic: 144  state: 3  wait: 1  next: 258  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 43  action: 0  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 31  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 257 ball3
   pic: 145  state: 3  wait: 1  next: 258  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 258 ball3
   pic: 146  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 259  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 259 ball4
   pic: 150  state: 3  wait: 1  next: 260  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 260 ball4
   pic: 151  state: 3  wait: 1  next: 261  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 34  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 261 ball4
   pic: 152  state: 3  wait: 1  next: 263  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 48  action: 50  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 27  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 262 ball4
   pic: 146  state: 3  wait: 1  next: 263  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 263 ball4
   pic: 145  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 264  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 264 ball4
   pic: 145  state: 3  wait: 1  next: 242  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 266 ballend
   pic: 140  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 270 many_punch
   pic: 153  state: 3  wait: 1  next: 271  dvx: 7  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 75
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 37  y: 47  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 271 many_punch
   pic: 154  state: 3  wait: 1  next: 272  dvx: 5  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 31  y: 47  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 63  y: 9  w: 16  h: 67  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 17  y: 35  w: 61  h: 13  dvx: 7  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 272 many_punch
   pic: 155  state: 3  wait: 1  next: 273  dvx: 3  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 35  y: 44  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 273 many_punch
   pic: 156  state: 3  wait: 1  next: 274  dvx: 3  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 29  y: 45  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 57  y: 9  w: 18  h: 67  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 14  y: 35  w: 58  h: 18  dvx: 7  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 274 many_punch
   pic: 157  state: 3  wait: 1  next: 275  dvx: 3  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 75
   wpoint:
      kind: 1  x: 26  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 275 many_punch
   pic: 158  state: 3  wait: 1  next: 276  dvx: 5  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 28  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 276 many_punch
   pic: 159  state: 3  wait: 1  next: 277  dvx: 5  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 64  y: 10  w: 18  h: 68  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: -1  y: 22  w: 81  h: 25  dvx: 10  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 277 many_punch
   pic: 169  state: 3  wait: 1  next: 278  dvx: 3  dvy: 0  dvz: 0  centerx: 18  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 278 many_punch
   pic: 168  state: 3  wait: 1  next: 279  dvx: 5  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300
   wpoint:
      kind: 1  x: 32  y: 40  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 279 many_punch
   pic: 167  state: 3  wait: 1  next: 280  dvx: 7  dvy: 0  dvz: 0  centerx: 26  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 33  y: 40  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 280 many_punch
   pic: 166  state: 3  wait: 1  next: 281  dvx: 3  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 34  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 10  y: 2  w: 75  h: 68  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 12  y: 11  w: 70  h: 51  dvx: 7  dvy: -15  fall: 70  vrest: 15  bdefend: 60  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 281 many_punch
   pic: 165  state: 3  wait: 2  next: 282  dvx: 3  dvy: 0  dvz: 0  centerx: 27  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   wpoint:
      kind: 1  x: 33  y: 42  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 282 many_punch
   pic: 164  state: 3  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   wpoint:
      kind: 1  x: 41  y: 44  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 290 jumphit
   pic: 160  state: 15  wait: 1  next: 291  dvx: 8  dvy: -8  dvz: 0  centerx: 32  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0 mp: 25
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 28  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 13  y: 8  w: 38  h: 61
   bdy_end:
<frame_end>

<frame> 291 jumphit
   pic: 161  state: 15  wait: 2  next: 292  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 28  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 15  y: 8  w: 34  h: 62
   bdy_end:
<frame_end>

<frame> 292 jumphit
   pic: 161  state: 15  wait: 15  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 293  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 31  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 8  w: 34  h: 66
   bdy_end:
<frame_end>

<frame> 293 jumphit
   pic: 162  state: 15  wait: 3  next: 294  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 39  y: 39  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 17  y: 19  w: 44  h: 45  dvx: 22  dvy: 15  fall: 70  arest: 12  bdefend: 60  injury: 50  
   itr_end:
   bdy:
      kind: 0  x: 16  y: 20  w: 46  h: 46
   bdy_end:
<frame_end>

<frame> 294 jumphit
   pic: 163  state: 15  wait: 15  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 39  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 20  w: 46  h: 46
   bdy_end:
<frame_end>

<frame> 300 singlong
   pic: 170  state: 3  wait: 1  next: 301  dvx: 7  dvy: -9  dvz: 0  centerx: 30  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0 mp: 225
  sound: data\095.wav 
   wpoint:
      kind: 1  x: 31  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 301 singlong
   pic: 171  state: 3  wait: 1  next: 302  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\031.wav 
   wpoint:
      kind: 1  x: 37  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 10  y: 3  w: 72  h: 75  dvx: 7  dvy: -13  fall: 70  vrest: 10  bdefend: 60  injury: 85  
   itr_end:
<frame_end>

<frame> 302 singlong
   pic: 172  state: 3  wait: 1  next: 303  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 81  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 42  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 13  y: -1  w: 67  h: 80  dvx: 7  dvy: -11  fall: 70  vrest: 10  bdefend: 60  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 19  y: 7  w: 36  h: 69
   bdy_end:
<frame_end>

<frame> 303 singlong
   pic: 173  state: 3  wait: 1  next: 304  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 11  y: -2  w: 63  h: 80  dvx: 7  dvy: -9  fall: 70  vrest: 10  bdefend: 60  injury: 45  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 6  w: 30  h: 69
   bdy_end:
<frame_end>

<frame> 304 singlong
   pic: 174  state: 3  wait: 2  next: 305  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 81  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 39  weaponact: 28  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 19  y: 1  w: 61  h: 80  dvx: 7  dvy: -7  fall: 70  vrest: 10  bdefend: 60  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 12  w: 29  h: 66
   bdy_end:
<frame_end>

<frame> 305 singlong
   pic: 175  state: 3  wait: 2  next: 306  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 36  weaponact: 27  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 27  y: 7  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 306 singlong
   pic: 176  state: 3  wait: 3  next: 307  dvx: 0  dvy: 0  dvz: 0  centerx: 29  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 35  weaponact: 29  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 11  w: 30  h: 61
   bdy_end:
<frame_end>

<frame> 307 singlong
   pic: 177  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 29  centery: 73  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 37  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 3  w: 33  h: 68
   bdy_end:
<frame_end>

<frame> 399 dummy
   pic: 0  state: 0  wait: 0  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>
<bmp_begin>
name: Davis
head: sprite\sys\davis_f.bmp
small: sprite\sys\davis_s.bmp
file(0-69): sprite\sys\davis_0.bmp  w: 79  h: 79  row: 10  col: 7
file(70-139): sprite\sys\davis_1.bmp  w: 79  h: 79  row: 10  col: 7
file(140-209): sprite\sys\davis_2.bmp  w: 79  h: 79  row: 10  col: 7
walking_frame_rate 3
walking_speed 5.000000
walking_speedz 2.500000
running_frame_rate 3
running_speed 10.000000
running_speedz 1.600000
heavy_walking_speed 3.700000
heavy_walking_speedz 1.850000
heavy_running_speed 6.200000
heavy_running_speedz 1.000000
jump_height -16.299999
jump_distance 10.000000
jump_distancez 3.750000
dash_height -10.000000
dash_distance 18.000000
dash_distancez 5.000000
rowing_height -2.000000
rowing_distance 5.000000
<bmp_end>

<frame> 0 standing
   pic: 0  state: 0  wait: 5  next: 1  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 55  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 1 standing
   pic: 1  state: 0  wait: 3  next: 2  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 54  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 2 standing
   pic: 2  state: 0  wait: 5  next: 3  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 3 standing
   pic: 3  state: 0  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 5 walking
   pic: 4  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 23  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 6 walking
   pic: 5  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 26  y: 54  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 7 walking
   pic: 6  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 52  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 8 walking
   pic: 7  state: 1  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 52  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 1  x: 40  y: 16  w: 25  h: 65  
      catchingact: 120 120  caughtact: 130 130  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 15  w: 27  h: 65
   bdy_end:
<frame_end>

<frame> 9 running
   pic: 20  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
  sound: data\003.wav 
   bpoint:
      x: 49  y: 39
   bpoint_end:
   wpoint:
      kind: 1  x: 58  y: 50  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 10 running
   pic: 21  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   bpoint:
      x: 49  y: 38
   bpoint_end:
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 11 running
   pic: 22  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
  sound: data\004.wav 
   bpoint:
      x: 45  y: 37
   bpoint_end:
   wpoint:
      kind: 1  x: 26  y: 53  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 12 heavy_obj_walk
   pic: 23  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 22  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 13 heavy_obj_walk
   pic: 24  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 22  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 14 heavy_obj_walk
   pic: 25  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 33
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 15 heavy_obj_walk
   pic: 26  state: 1  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 39  y: 34
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 16 heavy_obj_run
   pic: 125  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\003.wav 
   bpoint:
      x: 38  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 37  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 17 heavy_obj_run
   pic: 126  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 35
   bpoint_end:
   wpoint:
      kind: 1  x: 42  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 18 heavy_obj_run
   pic: 127  state: 2  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\004.wav 
   bpoint:
      x: 38  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 15  w: 28  h: 64
   bdy_end:
<frame_end>

<frame> 19 heavy_stop_run
   pic: 128  state: 15  wait: 7  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   bpoint:
      x: 38  y: 35
   bpoint_end:
   wpoint:
      kind: 1  x: 34  y: 24  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 28  y: 16  w: 27  h: 64
   bdy_end:
<frame_end>

<frame> 20 normal_weapon_atck
   pic: 70  state: 3  wait: 1  next: 21  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 36  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 33  y: 10  w: 26  h: 67
   bdy_end:
<frame_end>

<frame> 21 normal_weapon_atck
   pic: 71  state: 3  wait: 1  next: 22  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 18  y: 32  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 31  y: 8  w: 29  h: 71
   bdy_end:
<frame_end>

<frame> 22 normal_weapon_atck
   pic: 72  state: 3  wait: 1  next: 23  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 60  y: 51  weaponact: 23  attacking: 1  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 11  w: 36  h: 68
   bdy_end:
<frame_end>

<frame> 23 normal_weapon_atck
   pic: 73  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 58  y: 55  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 9  w: 36  h: 66
   bdy_end:
   bdy:
      kind: 0  x: 25  y: 61  w: 17  h: 18
   bdy_end:
<frame_end>

<frame> 25 normal_weapon_atck
   pic: 74  state: 3  wait: 1  next: 26  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 46  y: 33  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 11  w: 30  h: 69
   bdy_end:
<frame_end>

<frame> 26 normal_weapon_atck
   pic: 75  state: 3  wait: 1  next: 27  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 60  y: 35  weaponact: 33  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 11  w: 31  h: 69
   bdy_end:
<frame_end>

<frame> 27 normal_weapon_atck
   pic: 76  state: 3  wait: 1  next: 28  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 64  y: 51  weaponact: 24  attacking: 1  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 10  w: 36  h: 71
   bdy_end:
<frame_end>

<frame> 28 normal_weapon_atck
   pic: 77  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 13  y: 43  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 11  w: 34  h: 68
   bdy_end:
<frame_end>

<frame> 30 jump_weapon_atck
   pic: 80  state: 3  wait: 1  next: 31  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 77  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 31  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 7  w: 32  h: 58
   bdy_end:
<frame_end>

<frame> 31 jump_weapon_atck
   pic: 81  state: 3  wait: 1  next: 32  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 26  weaponact: 34  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 27  y: 8  w: 34  h: 59
   bdy_end:
<frame_end>

<frame> 32 jump_weapon_atck
   pic: 82  state: 3  wait: 1  next: 33  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 63  y: 45  weaponact: 24  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 35  w: 28  h: 35
   bdy_end:
   bdy:
      kind: 0  x: 29  y: 12  w: 26  h: 38
   bdy_end:
<frame_end>

<frame> 33 jump_weapon_atck
   pic: 83  state: 3  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 48  weaponact: 25  attacking: 2  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 30  w: 28  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 26  y: 9  w: 26  h: 37
   bdy_end:
<frame_end>

<frame> 35 run_weapon_atck
   pic: 84  state: 3  wait: 1  next: 36  dvx: 6  dvy: 0  dvz: 0  centerx: 36  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 44  y: 34  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 15  w: 31  h: 65
   bdy_end:
<frame_end>

<frame> 36 run_weapon_atck
   pic: 85  state: 3  wait: 2  next: 37  dvx: 4  dvy: 0  dvz: 0  centerx: 38  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 63  y: 52  weaponact: 24  attacking: 3  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 15  w: 34  h: 65
   bdy_end:
<frame_end>

<frame> 37 run_weapon_atck
   pic: 86  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 45  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 15  y: 43  weaponact: 25  attacking: 3  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 38 super_punch
   pic: 39  state: 3  wait: 2  next: 39  dvx: 1  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 40  y: 4  w: 32  h: 44  dvx: 7  dvy: -13  fall: 70  arest: 15  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 29  y: 6  w: 23  h: 72
   bdy_end:
<frame_end>

<frame> 39 super_punch
   pic: 49  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   bdy:
      kind: 0  x: 22  y: 13  w: 34  h: 68
   bdy_end:
<frame_end>

<frame> 40 dash_weapon_atck
   pic: 90  state: 3  wait: 1  next: 41  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 17  y: 29  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 10  w: 35  h: 52
   bdy_end:
<frame_end>

<frame> 41 dash_weapon_atck
   pic: 91  state: 3  wait: 1  next: 42  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 26  weaponact: 34  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 31  w: 30  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 23  y: 8  w: 34  h: 33
   bdy_end:
<frame_end>

<frame> 42 dash_weapon_atck
   pic: 92  state: 3  wait: 1  next: 43  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 63  y: 45  weaponact: 24  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 35  w: 27  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 13  w: 30  h: 33
   bdy_end:
<frame_end>

<frame> 43 dash_weapon_atck
   pic: 93  state: 3  wait: 8  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 49  weaponact: 25  attacking: 4  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 39  w: 33  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 23  y: 13  w: 31  h: 37
   bdy_end:
<frame_end>

<frame> 45 light_weapon_thw
   pic: 94  state: 15  wait: 3  next: 46  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 17  y: 35  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 11  w: 32  h: 68
   bdy_end:
   bdy:
      kind: 0  x: 17  y: 40  w: 24  h: 10
   bdy_end:
<frame_end>

<frame> 46 light_weapon_thw
   pic: 95  state: 15  wait: 1  next: 47  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 15  y: 30  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 32  y: 8  w: 27  h: 71
   bdy_end:
<frame_end>

<frame> 47 light_weapon_thw
   pic: 96  state: 15  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 107  y: 60  weaponact: 35  attacking: 0  cover: 0  dvx: 19  dvy: -4  dvz: 3 
   wpoint_end:
   bdy:
      kind: 0  x: 17  y: 18  w: 48  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 49  w: 23  h: 29
   bdy_end:
<frame_end>

<frame> 50 heavy_weapon_thw
   pic: 27  state: 15  wait: 4  next: 51  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 33  y: 23  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 29  y: 7  w: 22  h: 73
   bdy_end:
<frame_end>

<frame> 51 heavy_weapon_thw
   pic: 28  state: 15  wait: 7  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 27  centery: 77  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 104  y: 36  weaponact: 10  attacking: 0  cover: 0  dvx: 13  dvy: -5  dvz: 2 
   wpoint_end:
   bdy:
      kind: 0  x: 8  y: 39  w: 61  h: 23
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 52 sky_lgt_wp_thw
   pic: 97  state: 15  wait: 3  next: 53  dvx: 0  dvy: 0  dvz: 0  centerx: 41  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 28  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 28  y: 4  w: 31  h: 63
   bdy_end:
<frame_end>

<frame> 53 sky_lgt_wp_thw
   pic: 98  state: 15  wait: 1  next: 54  dvx: 0  dvy: -2  dvz: 0  centerx: 41  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\008.wav 
   wpoint:
      kind: 1  x: 16  y: 25  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 35  y: 10  w: 36  h: 23
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 30  w: 32  h: 39
   bdy_end:
<frame_end>

<frame> 54 sky_lgt_wp_thw
   pic: 99  state: 15  wait: 9  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 67  y: 71  weaponact: 23  attacking: 0  cover: 0  dvx: 16  dvy: 8  dvz: 3 
   wpoint_end:
   bdy:
      kind: 0  x: 22  y: 15  w: 38  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 37  w: 26  h: 29
   bdy_end:
<frame_end>

<frame> 55 weapon_drink
   pic: 107  state: 17  wait: 3  next: 56  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
  sound: data\042.wav 
   wpoint:
      kind: 1  x: 56  y: 24  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 56 weapon_drink
   pic: 108  state: 17  wait: 3  next: 57  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 23  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 57 weapon_drink
   pic: 109  state: 17  wait: 3  next: 58  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 54  y: 22  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 58 weapon_drink
   pic: 108  state: 17  wait: 3  next: 55  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 999  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 23  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 60 punch
   pic: 10  state: 3  wait: 1  next: 61  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 2  x: 27  y: 57  w: 36  h: 25  vrest: 1  
      
   itr_end:
   bdy:
      kind: 0  x: 28  y: 12  w: 33  h: 70
   bdy_end:
<frame_end>

<frame> 61 punch
   pic: 11  state: 3  wait: 1  next: 62  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   itr:
      kind: 0  x: 21  y: 31  w: 43  h: 18  dvx: 2  bdefend: 16  injury: 20  
   itr_end:
   bdy:
      kind: 0  x: 13  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 62 punch
   pic: 12  state: 3  wait: 1  next: 63  dvx: 2  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 9  w: 31  h: 72
   bdy_end:
<frame_end>

<frame> 63 punch
   pic: 13  state: 3  wait: 1  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 29  y: 10  w: 32  h: 70
   bdy_end:
<frame_end>

<frame> 65 punch
   pic: 14  state: 3  wait: 1  next: 66  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 2  x: 25  y: 58  w: 37  h: 21  vrest: 1  
      
   itr_end:
   bdy:
      kind: 0  x: 26  y: 12  w: 27  h: 68
   bdy_end:
<frame_end>

<frame> 66 punch
   pic: 15  state: 3  wait: 1  next: 67  dvx: 0  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   itr:
      kind: 0  x: 23  y: 38  w: 41  h: 15  dvx: 2  bdefend: 16  injury: 20  
   itr_end:
   bdy:
      kind: 0  x: 13  y: 11  w: 32  h: 67
   bdy_end:
<frame_end>

<frame> 67 punch
   pic: 16  state: 3  wait: 1  next: 68  dvx: 2  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 15  w: 37  h: 64
   bdy_end:
<frame_end>

<frame> 68 punch
   pic: 17  state: 3  wait: 1  next: 999  dvx: 2  dvy: 0  dvz: 0  centerx: 41  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 28  y: 9  w: 32  h: 72
   bdy_end:
<frame_end>

<frame> 70 super_punch
   pic: 67  state: 3  wait: 2  next: 71  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 25  y: 16  w: 30  h: 61
   bdy_end:
<frame_end>

<frame> 71 super_punch
   pic: 68  state: 3  wait: 1  next: 72  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 14  w: 34  h: 66
   bdy_end:
<frame_end>

<frame> 72 super_punch
   pic: 8  state: 3  wait: 2  next: 73  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 40  y: 5  w: 35  h: 45  dvx: 3  dvy: -10  fall: 70  arest: 15  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 26  y: 12  w: 35  h: 66
   bdy_end:
<frame_end>

<frame> 73 super_punch
   pic: 9  state: 3  wait: 1  next: 74  dvx: 5  dvy: 0  dvz: 0  centerx: 27  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 23  y: 10  w: 29  h: 69
   bdy_end:
<frame_end>

<frame> 74 super_punch
   pic: 19  state: 3  wait: 2  next: 75  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 15  w: 41  h: 65
   bdy_end:
<frame_end>

<frame> 75 super_punch
   pic: 29  state: 3  wait: 1  next: 38  dvx: 6  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 24  y: 10  w: 34  h: 69
   bdy_end:
<frame_end>

<frame> 79 jump_attack
   pic: 137  state: 3  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 6  w: 29  h: 58
   bdy_end:
<frame_end>

<frame> 80 jump_attack
   pic: 132  state: 3  wait: 1  next: 81  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 10  w: 35  h: 57
   bdy_end:
<frame_end>

<frame> 81 jump_attack
   pic: 133  state: 3  wait: 1  next: 82  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 22  y: 9  w: 35  h: 56
   bdy_end:
<frame_end>

<frame> 82 jump_attack
   pic: 134  state: 3  wait: 1  next: 83  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 24  y: 6  w: 29  h: 60
   bdy_end:
<frame_end>

<frame> 83 jump_attack
   pic: 135  state: 3  wait: 3  next: 84  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 70  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 17  y: 37  w: 52  h: 17  dvx: 9  dvy: -5  fall: 70  arest: 15  bdefend: 30  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 2  w: 29  h: 63
   bdy_end:
<frame_end>

<frame> 84 jump_attack
   pic: 136  state: 3  wait: 1  next: 79  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 32  y: 40  w: 36  h: 16  dvx: 9  dvy: -5  fall: 70  arest: 15  bdefend: 30  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 5  w: 28  h: 63
   bdy_end:
<frame_end>

<frame> 85 run_attack
   pic: 100  state: 3  wait: 2  next: 86  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 17  y: 25  w: 44  h: 54
   bdy_end:
<frame_end>

<frame> 86 run_attack
   pic: 101  state: 3  wait: 1  next: 87  dvx: 16  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 25  y: 24  w: 31  h: 55
   bdy_end:
<frame_end>

<frame> 87 run_attack
   pic: 102  state: 3  wait: 1  next: 88  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 79  hit_a: 89  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: -18  y: 24  w: 88  h: 30  dvx: 20  fall: 70  vrest: 7  bdefend: 60  injury: 55  
   itr_end:
   bdy:
      kind: 0  x: 15  y: 19  w: 37  h: 62
   bdy_end:
<frame_end>

<frame> 88 run_attack
   pic: 103  state: 3  wait: 3  next: 89  dvx: 0  dvy: 0  dvz: 0  centerx: 20  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 28  y: 25  w: 43  h: 27  dvx: 17  fall: 70  vrest: 10  bdefend: 60  injury: 40  
   itr_end:
   bdy:
      kind: 0  x: 14  y: 14  w: 43  h: 67
   bdy_end:
<frame_end>

<frame> 89 run_attack
   pic: 104  state: 3  wait: 2  next: 97  dvx: 0  dvy: 0  dvz: 0  centerx: 20  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 14  y: 14  w: 43  h: 67
   bdy_end:
<frame_end>

<frame> 90 dash_attack
   pic: 132  state: 3  wait: 1  next: 91  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 18  y: 10  w: 35  h: 57
   bdy_end:
<frame_end>

<frame> 91 dash_attack
   pic: 133  state: 3  wait: 1  next: 92  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   bdy:
      kind: 0  x: 22  y: 9  w: 35  h: 56
   bdy_end:
<frame_end>

<frame> 92 dash_attack
   pic: 134  state: 3  wait: 1  next: 93  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 24  y: 6  w: 29  h: 60
   bdy_end:
<frame_end>

<frame> 93 dash_attack
   pic: 135  state: 3  wait: 7  next: 94  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 70  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 17  y: 37  w: 52  h: 17  dvx: 14  dvy: -5  fall: 70  arest: 9  bdefend: 60  injury: 80  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 2  w: 29  h: 63
   bdy_end:
<frame_end>

<frame> 94 dash_attack
   pic: 136  state: 3  wait: 1  next: 96  dvx: 0  dvy: 0  dvz: 0  centerx: 25  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   itr:
      kind: 0  x: 32  y: 40  w: 36  h: 16  dvx: 14  dvy: -5  fall: 70  arest: 9  bdefend: 60  injury: 80  
   itr_end:
   bdy:
      kind: 0  x: 11  y: 5  w: 28  h: 63
   bdy_end:
<frame_end>

<frame> 95 dash_defend
   pic: 111  state: 7  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 21  y: 27  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 14  y: 19  w: 28  h: 36
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 37  w: 24  h: 34
   bdy_end:
<frame_end>

<frame> 96 dash_attack
   pic: 137  state: 3  wait: 3  next: 96  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 6  w: 29  h: 58
   bdy_end:
<frame_end>

<frame> 97 run_attack
   pic: 105  state: 3  wait: 2  next: 98  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 98 run_attack
   pic: 106  state: 3  wait: 1  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 20  y: 11  w: 31  h: 68
   bdy_end:
<frame_end>

<frame> 100 rowing
   pic: 66  state: 6  wait: 2  next: 101  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 80  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 21  y: 41  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 101 rowing
   pic: 65  state: 6  wait: 6  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 34  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 102 rowing
   pic: 58  state: 6  wait: 2  next: 103  dvx: 9  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 38  y: 75  weaponact: 22  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 103 rowing
   pic: 59  state: 6  wait: 2  next: 104  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 43  y: 47  weaponact: 31  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 104 rowing
   pic: 69  state: 6  wait: 2  next: 105  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 20  y: 61  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 105 rowing
   pic: 58  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 35  y: 74  weaponact: 22  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 106 rowing
   pic: 59  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 44  y: 48  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 293  y: 198  w: 1  h: 1  vrest: 1  
   itr_end:
<frame_end>

<frame> 107 rowing
   pic: 69  state: 6  wait: 2  next: 219  dvx: 9  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Uj: 290
   wpoint:
      kind: 1  x: 20  y: 59  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 7  x: 36  y: 54  w: 13  h: 25  vrest: 1  
   itr_end:
<frame_end>

<frame> 108 rowing
   pic: 117  state: 6  wait: 3  next: 109  dvx: 0  dvy: 0  dvz: 0  centerx: 42  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 44  y: 52  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 109 rowing
   pic: 118  state: 6  wait: 6  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 19  y: 43  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 110 defend
   pic: 56  state: 7  wait: 12  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Fa: 240 hit_Ua: 300 hit_Da: 270 hit_Uj: 290
   wpoint:
      kind: 1  x: 41  y: 40  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 19  w: 38  h: 60
   bdy_end:
<frame_end>

<frame> 111 defend
   pic: 57  state: 7  wait: 0  next: 110  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 41  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 19  w: 42  h: 60
   bdy_end:
<frame_end>

<frame> 112 broken_defend
   pic: 46  state: 8  wait: 1  next: 113  dvx: -2  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 37  y: 53  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 113 broken_defend
   pic: 47  state: 8  wait: 2  next: 114  dvx: -2  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 23  y: 57  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 114 broken_defend
   pic: 48  state: 8  wait: 3  next: 999  dvx: -2  dvy: 0  dvz: 0  centerx: 43  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 43  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: -9  y: 16  w: 85  h: 65  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 5  y: 17  w: 64  h: 65
   bdy_end:
<frame_end>

<frame> 115 picking_light
   pic: 36  state: 15  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   wpoint:
      kind: 1  x: 34  y: 75  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 32  y: 24  w: 28  h: 28
   bdy_end:
<frame_end>

<frame> 116 picking_heavy
   pic: 36  state: 15  wait: 2  next: 117  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   wpoint:
      kind: 1  x: 42  y: 79  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 36  y: 26  w: 26  h: 25
   bdy_end:
<frame_end>

<frame> 117 picking_heavy
   pic: 36  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 46  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 75  weaponact: 10  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 43  w: 33  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 34  y: 19  w: 26  h: 37
   bdy_end:
<frame_end>

<frame> 120 catching
   pic: 51  state: 9  wait: 2  next: 121  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\015.wav 
   cpoint:
      kind: 1  x: 61  y: 39
      vaction: 131  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 7 
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 121 catching
   pic: 50  state: 9  wait: 0  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300 hit_Da: 274
   cpoint:
      kind: 1  x: 64  y: 35
      vaction: 130  aaction: 122  taction: -232  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: -7 
   cpoint_end:
   wpoint:
      kind: 1  x: 47  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 122 catching
   pic: 51  state: 9  wait: 5  next: 123  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 1  x: 61  y: 35
      vaction: 130  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 7 
   cpoint_end:
   wpoint:
      kind: 1  x: 34  y: 41  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 123 catching
   pic: 52  state: 9  wait: 4  next: 121  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\014.wav 
   cpoint:
      kind: 1  x: 52  y: 36
      injury: 15  vaction: 132  throwvz: -842150451  hurtable: 1 throwinjury: -842150451 decrease: 3 
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 46  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 19  y: 15  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 130 picked_caught
   pic: 53  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 40  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 42  y: 39
      fronthurtact: 132 backhurtact: 131 
   cpoint_end:
   wpoint:
      kind: 1  x: 28  y: 54  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 131 picked_caught
   pic: 54  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 43  y: 39
      fronthurtact: 132 backhurtact: 132 
   cpoint_end:
   wpoint:
      kind: 1  x: 25  y: 49  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 132 picked_caught
   pic: 55  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 41  y: 39
      fronthurtact: 131 backhurtact: 131 
   cpoint_end:
   wpoint:
      kind: 1  x: 42  y: 43  weaponact: 30  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 14  w: 28  h: 66
   bdy_end:
<frame_end>

<frame> 133 picked_caught
   pic: 30  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 33  y: 36
      
   cpoint_end:
   wpoint:
      kind: 1  x: 37  y: 45  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 134 picked_caught
   pic: 31  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 83  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 30  y: 37
      
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 28  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 135 picked_caught
   pic: 32  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 35  y: 22
      
   cpoint_end:
   wpoint:
      kind: 1  x: 39  y: 47  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 136 picked_caught
   pic: 33  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 35  y: 37
      
   cpoint_end:
   wpoint:
      kind: 1  x: 48  y: 44  weaponact: 34  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 137 picked_caught
   pic: 34  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 28  y: 59
      
   cpoint_end:
   wpoint:
      kind: 1  x: 38  y: 75  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 138 picked_caught
   pic: 35  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 31  y: 51
      
   cpoint_end:
   wpoint:
      kind: 1  x: 35  y: 73  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 139 picked_caught
   pic: 40  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 45  y: 32
      
   cpoint_end:
   wpoint:
      kind: 1  x: 32  y: 47  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 140 picked_caught
   pic: 41  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 40  y: 39
      
   cpoint_end:
   wpoint:
      kind: 1  x: 42  y: 38  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 141 picked_caught
   pic: 42  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 44  y: 40
      
   cpoint_end:
   wpoint:
      kind: 1  x: 47  y: 46  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 142 picked_caught
   pic: 43  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 46  y: 51
      
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 63  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 143 picked_caught
   pic: 44  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 45  y: 66
      
   cpoint_end:
   wpoint:
      kind: 1  x: 56  y: 75  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 144 picked_caught
   pic: 45  state: 10  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 2  x: 42  y: 55
      
   cpoint_end:
   wpoint:
      kind: 1  x: 44  y: 72  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 180 falling
   pic: 30  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 44  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 21  y: 14  w: 29  h: 44  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 25  y: 25  w: 21  h: 20
   bdy_end:
<frame_end>

<frame> 181 falling
   pic: 31  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 85  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 27  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 8  y: 15  w: 30  h: 32  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 27  y: 35  w: 28  h: 21  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 20  w: 24  h: 23
   bdy_end:
<frame_end>

<frame> 182 falling
   pic: 32  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 37  y: 47  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 13  y: 18  w: 46  h: 26  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 27  y: 22  w: 20  h: 18
   bdy_end:
<frame_end>

<frame> 183 falling
   pic: 33  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 49  y: 44  weaponact: 33  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 32  y: 18  w: 33  h: 27  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 10  y: 38  w: 38  h: 21  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 30  w: 27  h: 21
   bdy_end:
<frame_end>

<frame> 184 falling
   pic: 34  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 66  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 72  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 185 falling
   pic: 35  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 35  y: 73  weaponact: 31  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 186 falling
   pic: 40  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 29  y: 47  weaponact: 34  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 22  y: 12  w: 36  h: 50  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 31  y: 24  w: 25  h: 23
   bdy_end:
<frame_end>

<frame> 187 falling
   pic: 41  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 39  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 33  y: 6  w: 26  h: 46  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 26  y: 43  w: 21  h: 29  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 27  w: 24  h: 26
   bdy_end:
<frame_end>

<frame> 188 falling
   pic: 42  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 48  y: 45  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 14  y: 29  w: 58  h: 23  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 30  y: 31  w: 24  h: 21
   bdy_end:
<frame_end>

<frame> 189 falling
   pic: 43  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 63  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 4  x: 24  y: 27  w: 26  h: 28  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   itr:
      kind: 4  x: 37  y: 45  w: 31  h: 28  dvx: 2  fall: 70  vrest: 20  bdefend: 10  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 30  y: 39  w: 23  h: 21
   bdy_end:
<frame_end>

<frame> 190 falling
   pic: 44  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 71  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 53  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 191 falling
   pic: 45  state: 12  wait: 3  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 73  weaponact: 25  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 200 ice
   pic: 37  state: 15  wait: 2  next: 201  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 45  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 201 ice
   pic: 38  state: 13  wait: 90  next: 202  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 20  y: 55  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 14  x: 10  y: 9  w: 55  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 202 ice
   pic: 37  state: 15  wait: 1  next: 182  dvx: -4  dvy: -3  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 18  y: 44  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 9  w: 55  h: 68
   bdy_end:
<frame_end>

<frame> 203 fire
   pic: 78  state: 18  wait: 1  next: 204  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 46  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 204 fire
   pic: 79  state: 18  wait: 1  next: 203  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 46  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 205 fire
   pic: 88  state: 18  wait: 1  next: 206  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 33  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 206 fire
   pic: 89  state: 18  wait: 1  next: 205  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 33  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 22  y: 35  w: 26  h: 19  dvx: -6  dvy: -6  fall: 70  vrest: 10  bdefend: 16  injury: 30  
      effect: 20  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 35  w: 26  h: 19
   bdy_end:
<frame_end>

<frame> 207 tired
   pic: 69  state: 15  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 64  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 44  y: 28  w: 22  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 47  w: 28  h: 35
   bdy_end:
<frame_end>

<frame> 210 jump
   pic: 60  state: 4  wait: 1  next: 211  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 63  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 22  y: 24  w: 35  h: 58
   bdy_end:
<frame_end>

<frame> 211 jump
   pic: 61  state: 4  wait: 1  next: 212  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 43  y: 64  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 26  w: 34  h: 56
   bdy_end:
<frame_end>

<frame> 212 jump
   pic: 62  state: 4  wait: 1  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 38  y: 28
   bpoint_end:
   wpoint:
      kind: 1  x: 33  y: 36  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 11  w: 29  h: 61
   bdy_end:
<frame_end>

<frame> 213 dash
   pic: 63  state: 5  wait: 8  next: 216  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 36  y: 36  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 43  y: 5  w: 23  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 28  y: 29  w: 21  h: 33
   bdy_end:
   bdy:
      kind: 0  x: 18  y: 48  w: 27  h: 21
   bdy_end:
<frame_end>

<frame> 214 dash
   pic: 64  state: 5  wait: 8  next: 217  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 33  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 30  y: 40  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 20  y: 5  w: 27  h: 38
   bdy_end:
   bdy:
      kind: 0  x: 16  y: 37  w: 36  h: 22
   bdy_end:
<frame_end>

<frame> 215 crouch
   pic: 60  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\012.wav 
   bpoint:
      x: 42  y: 55
   bpoint_end:
   wpoint:
      kind: 1  x: 45  y: 60  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 26  w: 31  h: 54
   bdy_end:
<frame_end>

<frame> 216 dash
   pic: 112  state: 5  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 43  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 35  y: 36  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 35  y: 8  w: 27  h: 27
   bdy_end:
   bdy:
      kind: 0  x: 16  y: 30  w: 39  h: 37
   bdy_end:
<frame_end>

<frame> 217 dash
   pic: 113  state: 5  wait: 2  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bpoint:
      x: 33  y: 30
   bpoint_end:
   wpoint:
      kind: 1  x: 29  y: 39  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 13  w: 29  h: 51
   bdy_end:
<frame_end>

<frame> 218 stop_running
   pic: 114  state: 15  wait: 5  next: 999  dvx: 1  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\009.wav 
   bpoint:
      x: 39  y: 36
   bpoint_end:
   wpoint:
      kind: 1  x: 41  y: 43  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 17  y: 25  w: 30  h: 55
   bdy_end:
   bdy:
      kind: 0  x: 45  y: 47  w: 16  h: 32
   bdy_end:
<frame_end>

<frame> 219 crouch2
   pic: 60  state: 15  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\012.wav 
   wpoint:
      kind: 1  x: 46  y: 61  weaponact: 35  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 26  y: 36  w: 29  h: 44
   bdy_end:
<frame_end>

<frame> 220 injured
   pic: 120  state: 11  wait: 2  next: 221  dvx: 0  dvy: 0  dvz: 0  centerx: 35  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 55  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 17  w: 29  h: 61
   bdy_end:
<frame_end>

<frame> 221 injured
   pic: 121  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 51  weaponact: 22  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 32  y: 16  w: 27  h: 63
   bdy_end:
   bdy:
      kind: 0  x: 22  y: 37  w: 26  h: 42
   bdy_end:
<frame_end>

<frame> 222 injured
   pic: 123  state: 11  wait: 2  next: 223  dvx: 0  dvy: 0  dvz: 0  centerx: 36  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 41  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 11  y: 24  w: 39  h: 31
   bdy_end:
   bdy:
      kind: 0  x: 25  y: 53  w: 40  h: 27
   bdy_end:
<frame_end>

<frame> 223 injured
   pic: 124  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 43  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 46  y: 41  weaponact: 21  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 12  y: 23  w: 40  h: 37
   bdy_end:
   bdy:
      kind: 0  x: 27  y: 56  w: 36  h: 24
   bdy_end:
<frame_end>

<frame> 224 injured
   pic: 130  state: 11  wait: 2  next: 225  dvx: 0  dvy: 0  dvz: 0  centerx: 43  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 23  y: 55  weaponact: 23  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 25  y: 13  w: 30  h: 65
   bdy_end:
<frame_end>

<frame> 225 injured
   pic: 131  state: 11  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 54  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 24  y: 18  w: 35  h: 63
   bdy_end:
<frame_end>

<frame> 226 injured
   pic: 120  state: 16  wait: 6  next: 227  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 43  y: 51  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 27  y: 22  w: 42  h: 58
   bdy_end:
<frame_end>

<frame> 227 injured
   pic: 122  state: 16  wait: 6  next: 228  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 50  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 24  w: 39  h: 57
   bdy_end:
<frame_end>

<frame> 228 injured
   pic: 121  state: 16  wait: 6  next: 229  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 44  y: 50  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 23  w: 37  h: 58
   bdy_end:
<frame_end>

<frame> 229 injured
   pic: 122  state: 16  wait: 6  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 47  weaponact: 20  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 6  x: 6  y: 12  w: 85  h: 68  vrest: 1  
   itr_end:
   bdy:
      kind: 0  x: 29  y: 26  w: 37  h: 53
   bdy_end:
<frame_end>

<frame> 230 lying
   pic: 34  state: 14  wait: 30  next: 219  dvx: 0  dvy: 0  dvz: 0  centerx: 38  centery: 73  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 74  weaponact: 32  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 231 lying
   pic: 44  state: 14  wait: 30  next: 219  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 57  y: 74  weaponact: 24  attacking: 0  cover: 0  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 232 throw_lying_man
   pic: 27  state: 9  wait: 3  next: 233  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   cpoint:
      kind: 1  x: 28  y: 9
      vaction: 135  throwvz: -842150451  throwinjury: -842150451 dircontrol: 1 
   cpoint_end:
   wpoint:
      kind: 1  x: 27  y: 16  weaponact: 31  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 18  y: 15  w: 36  h: 65
   bdy_end:
<frame_end>

<frame> 233 throw_lying_man
   pic: 28  state: 9  wait: 1  next: 234  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   cpoint:
      kind: 1  x: 72  y: 53
      vaction: 181  throwvx: 13  throwvy: -7  throwvz: 3  throwinjury: 30 
   cpoint_end:
   wpoint:
      kind: 1  x: 55  y: 67  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 10  y: 28  w: 61  h: 28
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 234 throw_lying_man
   pic: 28  state: 9  wait: 4  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 44  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 55  y: 67  weaponact: 25  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 13  y: 30  w: 57  h: 28
   bdy_end:
   bdy:
      kind: 0  x: 19  y: 56  w: 30  h: 24
   bdy_end:
<frame_end>

<frame> 240 ball1
   pic: 140  state: 3  wait: 1  next: 241  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 241 ball1
   pic: 141  state: 3  wait: 1  next: 242  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 242 ball1
   pic: 142  state: 3  wait: 1  next: 243  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 243 ball1
   pic: 143  state: 3  wait: 1  next: 244  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 244 ball1
   pic: 144  state: 3  wait: 1  next: 246  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 43  action: 0  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 30  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 245 ball1
   pic: 145  state: 3  wait: 1  next: 246  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 38  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 246 ball1
   pic: 146  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 247  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 247 ball2
   pic: 146  state: 3  wait: 1  next: 248  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 248 ball2
   pic: 147  state: 3  wait: 1  next: 249  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 249 ball2
   pic: 148  state: 3  wait: 1  next: 250  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 31  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 250 ball2
   pic: 149  state: 3  wait: 1  next: 252  dvx: 0  dvy: 0  dvz: 0  centerx: 23  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 40  action: 60  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 22  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 251 ball2
   pic: 146  state: 3  wait: 1  next: 252  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 252 ball2
   pic: 145  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 253  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 253 ball3
   pic: 145  state: 3  wait: 1  next: 254  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 254 ball3
   pic: 142  state: 3  wait: 1  next: 255  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 255 ball3
   pic: 143  state: 3  wait: 1  next: 256  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 256 ball3
   pic: 144  state: 3  wait: 1  next: 258  dvx: 0  dvy: 0  dvz: 0  centerx: 30  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 43  action: 0  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 31  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 257 ball3
   pic: 145  state: 3  wait: 1  next: 258  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 258 ball3
   pic: 146  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 259  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 259 ball4
   pic: 150  state: 3  wait: 1  next: 260  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 41  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 260 ball4
   pic: 151  state: 3  wait: 1  next: 261  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\048.wav 
   wpoint:
      kind: 1  x: 34  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 261 ball4
   pic: 152  state: 3  wait: 1  next: 263  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   opoint:
      kind: 1  x: 90  y: 48  action: 50  dvx: 0  dvy: 0  oid: 207  facing: 0
   opoint_end:
   wpoint:
      kind: 1  x: 27  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 262 ball4
   pic: 146  state: 3  wait: 1  next: 263  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 263 ball4
   pic: 145  state: 3  wait: 1  next: 266  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 264  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 264 ball4
   pic: 145  state: 3  wait: 1  next: 242  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 40
   wpoint:
      kind: 1  x: 40  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 266 ballend
   pic: 140  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 50  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 270 many_punch
   pic: 153  state: 3  wait: 1  next: 271  dvx: 7  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 75
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 37  y: 47  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 271 many_punch
   pic: 154  state: 3  wait: 1  next: 272  dvx: 5  dvy: 0  dvz: 0  centerx: 33  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 31  y: 47  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 63  y: 9  w: 16  h: 67  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 17  y: 35  w: 61  h: 13  dvx: 7  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 272 many_punch
   pic: 155  state: 3  wait: 1  next: 273  dvx: 3  dvy: 0  dvz: 0  centerx: 38  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 35  y: 44  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 273 many_punch
   pic: 156  state: 3  wait: 1  next: 274  dvx: 3  dvy: 0  dvz: 0  centerx: 32  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 29  y: 45  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 57  y: 9  w: 18  h: 67  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 14  y: 35  w: 58  h: 18  dvx: 7  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 274 many_punch
   pic: 157  state: 3  wait: 1  next: 275  dvx: 3  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 mp: 75
   wpoint:
      kind: 1  x: 26  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 275 many_punch
   pic: 158  state: 3  wait: 1  next: 276  dvx: 5  dvy: 0  dvz: 0  centerx: 24  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 28  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 276 many_punch
   pic: 159  state: 3  wait: 1  next: 277  dvx: 5  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 64  y: 10  w: 18  h: 68  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: -1  y: 22  w: 81  h: 25  dvx: 10  fall: 1  vrest: 7  bdefend: 16  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 277 many_punch
   pic: 169  state: 3  wait: 1  next: 278  dvx: 3  dvy: 0  dvz: 0  centerx: 18  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 27  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 278 many_punch
   pic: 168  state: 3  wait: 1  next: 279  dvx: 5  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300
   wpoint:
      kind: 1  x: 32  y: 40  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 279 many_punch
   pic: 167  state: 3  wait: 1  next: 280  dvx: 7  dvy: 0  dvz: 0  centerx: 26  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0 hit_Ua: 300
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 33  y: 40  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 49  y: 9  w: 18  h: 64  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 280 many_punch
   pic: 166  state: 3  wait: 1  next: 281  dvx: 3  dvy: 0  dvz: 0  centerx: 22  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 34  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 10  y: 2  w: 75  h: 68  dvx: 12  fall: 70  vrest: 7  bdefend: 16  injury: 45  
      effect: 4  
   itr_end:
   itr:
      kind: 0  x: 12  y: 11  w: 70  h: 51  dvx: 7  dvy: -15  fall: 70  vrest: 15  bdefend: 60  injury: 25  
   itr_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 281 many_punch
   pic: 165  state: 3  wait: 2  next: 282  dvx: 3  dvy: 0  dvz: 0  centerx: 27  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   wpoint:
      kind: 1  x: 33  y: 42  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 282 many_punch
   pic: 164  state: 3  wait: 3  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 79  hit_a: 0  hit_d: 0  hit_j: 290
   wpoint:
      kind: 1  x: 41  y: 44  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>

<frame> 290 jumphit
   pic: 160  state: 15  wait: 1  next: 291  dvx: 8  dvy: -8  dvz: 0  centerx: 32  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0 mp: 25
  sound: data\017.wav 
   wpoint:
      kind: 1  x: 28  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 13  y: 8  w: 38  h: 61
   bdy_end:
<frame_end>

<frame> 291 jumphit
   pic: 161  state: 15  wait: 2  next: 292  dvx: 0  dvy: 0  dvz: 0  centerx: 31  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 28  y: 41  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 15  y: 8  w: 34  h: 62
   bdy_end:
<frame_end>

<frame> 292 jumphit
   pic: 161  state: 15  wait: 15  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 37  centery: 79  hit_a: 293  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 31  y: 43  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 8  w: 34  h: 66
   bdy_end:
<frame_end>

<frame> 293 jumphit
   pic: 162  state: 15  wait: 3  next: 294  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\007.wav 
   wpoint:
      kind: 1  x: 39  y: 39  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 17  y: 19  w: 44  h: 45  dvx: 22  dvy: 15  fall: 70  arest: 12  bdefend: 60  injury: 50  
   itr_end:
   bdy:
      kind: 0  x: 16  y: 20  w: 46  h: 46
   bdy_end:
<frame_end>

<frame> 294 jumphit
   pic: 163  state: 15  wait: 15  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 72  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 39  y: 39  weaponact: 32  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 16  y: 20  w: 46  h: 46
   bdy_end:
<frame_end>

<frame> 300 singlong
   pic: 170  state: 3  wait: 1  next: 301  dvx: 7  dvy: -9  dvz: 0  centerx: 30  centery: 76  hit_a: 0  hit_d: 0  hit_j: 0 mp: 225
  sound: data\095.wav 
   wpoint:
      kind: 1  x: 31  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
<frame_end>

<frame> 301 singlong
   pic: 171  state: 3  wait: 1  next: 302  dvx: 0  dvy: 0  dvz: 0  centerx: 28  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
  sound: data\031.wav 
   wpoint:
      kind: 1  x: 37  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 10  y: 3  w: 72  h: 75  dvx: 7  dvy: -13  fall: 70  vrest: 10  bdefend: 60  injury: 85  
   itr_end:
<frame_end>

<frame> 302 singlong
   pic: 172  state: 3  wait: 1  next: 303  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 81  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 42  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 13  y: -1  w: 67  h: 80  dvx: 7  dvy: -11  fall: 70  vrest: 10  bdefend: 60  injury: 60  
   itr_end:
   bdy:
      kind: 0  x: 19  y: 7  w: 36  h: 69
   bdy_end:
<frame_end>

<frame> 303 singlong
   pic: 173  state: 3  wait: 1  next: 304  dvx: 0  dvy: 0  dvz: 0  centerx: 26  centery: 78  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 41  y: 39  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 11  y: -2  w: 63  h: 80  dvx: 7  dvy: -9  fall: 70  vrest: 10  bdefend: 60  injury: 45  
   itr_end:
   bdy:
      kind: 0  x: 22  y: 6  w: 30  h: 69
   bdy_end:
<frame_end>

<frame> 304 singlong
   pic: 174  state: 3  wait: 2  next: 305  dvx: 0  dvy: 0  dvz: 0  centerx: 34  centery: 81  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 45  y: 39  weaponact: 28  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   itr:
      kind: 0  x: 19  y: 1  w: 61  h: 80  dvx: 7  dvy: -7  fall: 70  vrest: 10  bdefend: 60  injury: 30  
   itr_end:
   bdy:
      kind: 0  x: 28  y: 12  w: 29  h: 66
   bdy_end:
<frame_end>

<frame> 305 singlong
   pic: 175  state: 3  wait: 2  next: 306  dvx: 0  dvy: 0  dvz: 0  centerx: 33  centery: 75  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 42  y: 36  weaponact: 27  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 27  y: 7  w: 28  h: 65
   bdy_end:
<frame_end>

<frame> 306 singlong
   pic: 176  state: 3  wait: 3  next: 307  dvx: 0  dvy: 0  dvz: 0  centerx: 29  centery: 74  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 30  y: 35  weaponact: 29  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 23  y: 11  w: 30  h: 61
   bdy_end:
<frame_end>

<frame> 307 singlong
   pic: 177  state: 3  wait: 2  next: 999  dvx: 0  dvy: 0  dvz: 0  centerx: 29  centery: 73  hit_a: 0  hit_d: 0  hit_j: 0
   wpoint:
      kind: 1  x: 36  y: 37  weaponact: 30  attacking: 0  cover: 1  dvx: 0  dvy: 0  dvz: 0 
   wpoint_end:
   bdy:
      kind: 0  x: 21  y: 3  w: 33  h: 68
   bdy_end:
<frame_end>

<frame> 399 dummy
   pic: 0  state: 0  wait: 0  next: 0  dvx: 0  dvy: 0  dvz: 0  centerx: 39  centery: 79  hit_a: 0  hit_d: 0  hit_j: 0
   bdy:
      kind: 0  x: 21  y: 18  w: 43  h: 62
   bdy_end:
<frame_end>
