<template>
	<div style="width:600px;">
		<!--周期启动-->
		<ul class="tab" style="">
			<li class="active"><a @click="showTabs($event,0)" aria-controls="home" role="tab" data-toggle="tab">秒</a></li>
			<li><a @click="showTabs($event,1)" aria-controls="profile" role="tab" data-toggle="tab">分钟</a></li>
			<li><a @click="showTabs($event,2)" aria-controls="messages" role="tab" data-toggle="tab">小时</a></li>
			<li><a @click="showTabs($event,3)" aria-controls="settings" role="tab" data-toggle="tab">日</a></li>
			<li><a @click="showTabs($event,4)" aria-controls="settings" role="tab" data-toggle="tab">月</a></li>
			<li><a @click="showTabs($event,5)" aria-controls="settings" role="tab" data-toggle="tab">周</a></li>
			<li><a @click="showTabs($event,6)" aria-controls="settings" role="tab" data-toggle="tab">年</a></li>
		</ul>

		<!--秒-->
		<div class="tab-pane">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="sec" @click="sec_everyTime()" id="sec_everyTime" value="0">
					<span>每秒 允许的通配符[， - * /]</span>
				</div>
				<div class="line">
					<input type="radio" name="sec" @click="sec_cycle()" id="sec_cycle" value="1">
					周期从
					<input class="numberspinner" style="width: 60px;" id="secStart_0" @change="sec_cycle()" v-model="secStart_0" type="number" min="0" max="59">
					-
					<input class="numberspinner" style="width: 60px;" id="secEnd_0" @change="sec_cycle()" v-model="secEnd_0" type="number" min="0" max="59">
					秒
				</div>
				<div class="line">
					<input type="radio" name="sec"  @click="sec_startOn()" id="sec_startOn" value="2">
					从
					<input class="numberspinner" style="width: 60px;" id="secStart_1" @change="sec_startOn()" v-model="secStart_1" type="number" min="0" max="59">
					秒开始，每
					<input class="numberspinner" style="width: 60px;" id="secEnd_1" @change="sec_startOn()" v-model="secEnd_1" type="number" min="0" max="59">
					秒执行一次
				</div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="sec" @click="sec_appoint()" id="sec_appoint" value="3">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp secList">
							<span value="0" @click="selectSec('0')">00</span>
							<span value="1" @click="selectSec('1')">01</span>
							<span value="2" @click="selectSec('2')">02</span>
							<span value="3" @click="selectSec('3')">03</span>
							<span value="4" @click="selectSec('4')">04</span>
							<span value="5" @click="selectSec('5')">05</span>
							<span value="6" @click="selectSec('6')">06</span>
							<span value="7" @click="selectSec('7')">07</span>
							<span value="8" @click="selectSec('8')">08</span>
							<span value="9" @click="selectSec('9')">09</span>
						</div>
						<div class="imp secList">
							<span value="10" @click="selectSec('10')">10</span>
							<span value="11" @click="selectSec('11')">11</span>
							<span value="12" @click="selectSec('12')">12</span>
							<span value="13" @click="selectSec('13')">13</span>
							<span value="14" @click="selectSec('14')">14</span>
							<span value="15" @click="selectSec('15')">15</span>
							<span value="16" @click="selectSec('16')">16</span>
							<span value="17" @click="selectSec('17')">17</span>
							<span value="18" @click="selectSec('18')">18</span>
							<span value="19" @click="selectSec('19')">19</span>
						</div>
						<div class="imp secList">
							<span value="20" @click="selectSec('20')">20</span>
							<span value="21" @click="selectSec('21')">21</span>
							<span value="22" @click="selectSec('22')">22</span>
							<span value="23" @click="selectSec('23')">23</span>
							<span value="24" @click="selectSec('24')">24</span>
							<span value="25" @click="selectSec('25')">25</span>
							<span value="26" @click="selectSec('26')">26</span>
							<span value="27" @click="selectSec('27')">27</span>
							<span value="28" @click="selectSec('28')">28</span>
							<span value="29" @click="selectSec('29')">29</span>
						</div>
						<div class="imp secList">
							<span :value="30" @click="selectSec('30')">30</span>
							<span :value="31" @click="selectSec('31')">31</span>
							<span :value="32" @click="selectSec('32')">32</span>
							<span :value="33" @click="selectSec('33')">33</span>
							<span :value="34" @click="selectSec('34')">34</span>
							<span :value="35" @click="selectSec('35')">35</span>
							<span :value="36" @click="selectSec('36')">36</span>
							<span :value="37" @click="selectSec('37')">37</span>
							<span :value="38" @click="selectSec('38')">38</span>
							<span :value="39" @click="selectSec('39')">39</span>
						</div>
						<div class="imp secList">
							<span :value="40" @click="selectSec('40')">40</span>
							<span :value="41" @click="selectSec('41')">41</span>
							<span :value="42" @click="selectSec('42')">42</span>
							<span :value="43" @click="selectSec('43')">43</span>
							<span :value="44" @click="selectSec('44')">44</span>
							<span :value="45" @click="selectSec('45')">45</span>
							<span :value="46" @click="selectSec('46')">46</span>
							<span :value="47" @click="selectSec('47')">47</span>
							<span :value="48" @click="selectSec('48')">48</span>
							<span :value="49" @click="selectSec('49')">49</span>
						</div>
						<div class="imp secList">
							<span :value="50" @click="selectSec('50')">50</span>
							<span :value="51" @click="selectSec('51')">51</span>
							<span :value="52" @click="selectSec('52')">52</span>
							<span :value="53" @click="selectSec('53')">53</span>
							<span :value="54" @click="selectSec('54')">54</span>
							<span :value="55" @click="selectSec('55')">55</span>
							<span :value="56" @click="selectSec('56')">56</span>
							<span :value="57" @click="selectSec('57')">57</span>
							<span :value="58" @click="selectSec('58')">58</span>
							<span :value="59" @click="selectSec('59')">59</span>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!--分钟-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="min" @click="min_everyTime()" id="min_everyTime">
					分钟 允许的通配符[， - * /]
				</div>
				<div class="line">
					<input type="radio" name="min" @click="min_cycle()" id="min_cycle">
					周期从
					<input class="numberspinner" style="width: 60px;" id="minStart_0" v-model="minStart_0" type="number" min="0" max="59">
					-
					<input class="numberspinner" style="width: 60px;" id="minEnd_0" v-model="minEnd_0" type="number" min="0" max="59">
					分钟
				</div>
				<div class="line">
					<input type="radio" name="min" @click="min_startOn()" id="min_startOn">
					从
					<input class="numberspinner" style="width: 60px;" id="minStart_1" v-model="minStart_1" type="number" min="0" max="59">
					分钟开始，每
					<input class="numberspinner" style="width: 60px;" id="minEnd_1" v-model="minEnd_1" type="number" min="0" max="59">
					分钟执行一次
				</div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="min" @click="min_appoint()" id="min_appoint">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp minList">
							<span :value="0" @click="selectMin('0')">00</span>
							<span :value="1" @click="selectMin('1')">01</span>
							<span :value="2" @click="selectMin('2')">02</span>
							<span :value="3" @click="selectMin('3')">03</span>
							<span :value="4" @click="selectMin('4')">04</span>
							<span :value="5" @click="selectMin('5')">05</span>
							<span :value="6" @click="selectMin('6')">06</span>
							<span :value="7" @click="selectMin('7')">07</span>
							<span :value="8" @click="selectMin('8')">08</span>
							<span :value="9" @click="selectMin('9')">09</span>
						</div>
						<div class="imp minList">
							<span :value="10" @click="selectMin('10')">10</span>
							<span :value="11" @click="selectMin('11')">11</span>
							<span :value="12" @click="selectMin('12')">12</span>
							<span :value="13" @click="selectMin('13')">13</span>
							<span :value="14" @click="selectMin('14')">14</span>
							<span :value="15" @click="selectMin('15')">15</span>
							<span :value="16" @click="selectMin('16')">16</span>
							<span :value="17" @click="selectMin('17')">17</span>
							<span :value="18" @click="selectMin('18')">18</span>
							<span :value="19" @click="selectMin('19')">19</span>
						</div>
						<div class="imp minList">
							<span :value="20" @click="selectMin('20')">20</span>
							<span :value="21" @click="selectMin('21')">21</span>
							<span :value="22" @click="selectMin('22')">22</span>
							<span :value="23" @click="selectMin('23')">23</span>
							<span :value="24" @click="selectMin('24')">24</span>
							<span :value="25" @click="selectMin('25')">25</span>
							<span :value="26" @click="selectMin('26')">26</span>
							<span :value="27" @click="selectMin('27')">27</span>
							<span :value="28" @click="selectMin('28')">28</span>
							<span :value="29" @click="selectMin('29')">29</span>
						</div>
						<div class="imp minList">
							<span :value="30" @click="selectMin('30')">30</span>
							<span :value="31" @click="selectMin('31')">31</span>
							<span :value="32" @click="selectMin('32')">32</span>
							<span :value="33" @click="selectMin('33')">33</span>
							<span :value="34" @click="selectMin('34')">34</span>
							<span :value="35" @click="selectMin('35')">35</span>
							<span :value="36" @click="selectMin('36')">36</span>
							<span :value="37" @click="selectMin('37')">37</span>
							<span :value="38" @click="selectMin('38')">38</span>
							<span :value="39" @click="selectMin('39')">39</span>
						</div>
						<div class="imp minList">
							<span :value="40" @click="selectMin('40')">40</span>
							<span :value="41" @click="selectMin('41')">41</span>
							<span :value="42" @click="selectMin('42')">42</span>
							<span :value="43" @click="selectMin('43')">43</span>
							<span :value="44" @click="selectMin('44')">44</span>
							<span :value="45" @click="selectMin('45')">45</span>
							<span :value="46" @click="selectMin('46')">46</span>
							<span :value="47" @click="selectMin('47')">47</span>
							<span :value="48" @click="selectMin('48')">48</span>
							<span :value="49" @click="selectMin('49')">49</span>
						</div>
						<div class="imp minList">
							<span :value="50" @click="selectMin('50')">50</span>
							<span :value="51" @click="selectMin('51')">51</span>
							<span :value="52" @click="selectMin('52')">52</span>
							<span :value="53" @click="selectMin('53')">53</span>
							<span :value="54" @click="selectMin('54')">54</span>
							<span :value="55" @click="selectMin('55')">55</span>
							<span :value="56" @click="selectMin('56')">56</span>
							<span :value="57" @click="selectMin('57')">57</span>
							<span :value="58" @click="selectMin('58')">58</span>
							<span :value="59" @click="selectMin('59')">59</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--小时-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="hour" @click="hour_everyTime" id="hour_everyTime">
					小时 允许的通配符[， - * /]
				</div>
				<div class="line">
					<input type="radio" name="hour" @click="hour_cycle()" id="hour_cycle">
					周期从
					<input class="numberspinner" style="width: 60px;" id="hourStart_0" v-model="hourStart_0" type="number" min="0" max="23">
					-
					<input class="numberspinner" style="width: 60px;" id="hourEnd_0" v-model="hourEnd_0" type="number" min="0" max="23">
					小时
				</div>
				<div class="line">
					<input type="radio" name="hour" @click="hour_startOn()" id="hour_startOn">
					从
					<input class="numberspinner" style="width: 60px;" id="hourStart_1" v-model="hourStart_1" type="number" min="0" max="23">
					小时开始，每
					<input class="numberspinner" style="width: 60px;" id="hourEnd_1" v-model="hourEnd_1" type="number" min="0" max="23">
					小时执行一次
				</div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="hour" @click="hour_appoint()" id="hour_appoint">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp hourList">
							<span :value="0" @click="selectHour('0')">00</span>
							<span :value="1" @click="selectHour('1')">01</span>
							<span :value="2" @click="selectHour('2')">02</span>
							<span :value="3" @click="selectHour('3')">03</span>
							<span :value="4" @click="selectHour('4')">04</span>
							<span :value="5" @click="selectHour('5')">05</span>
							<span :value="6" @click="selectHour('6')">06</span>
							<span :value="7" @click="selectHour('7')">07</span>
							<span :value="8" @click="selectHour('8')">08</span>
							<span :value="9" @click="selectHour('9')">09</span>
						</div>
						<div class="imp hourList">
							<span :value="10" @click="selectHour('10')">10</span>
							<span :value="11" @click="selectHour('11')">11</span>
							<span :value="12" @click="selectHour('12')">12</span>
							<span :value="13" @click="selectHour('13')">13</span>
							<span :value="14" @click="selectHour('14')">14</span>
							<span :value="15" @click="selectHour('15')">15</span>
							<span :value="16" @click="selectHour('16')">16</span>
							<span :value="17" @click="selectHour('17')">17</span>
							<span :value="18" @click="selectHour('18')">18</span>
							<span :value="19" @click="selectHour('19')">19</span>
						</div>
						<div class="imp hourList">
							<span :value="20" @click="selectHour('20')">20</span>
							<span :value="21" @click="selectHour('21')">21</span>
							<span :value="22" @click="selectHour('22')">22</span>
							<span :value="23" @click="selectHour('23')">23</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--日-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="day" @click="day_everyTime()" id="day_everyTime">
					日 允许的通配符[， - * / L W]
				</div>
				<div class="line">
					<input type="radio" name="day" @click="day_unAppoint()" id="day_unAppoint">
					不指定
				</div>
				<div class="line">
					<input type="radio" name="day" @click="day_cycle()" id="day_cycle">
					周期从
					<input class="numberspinner" style="width: 60px;" id="dayStart_0" v-model="dayStart_0" type="number" min="1" max="31">
					-
					<input class="numberspinner" style="width: 60px;" id="dayEnd_0" v-model="dayEnd_0" type="number" min="1" max="31">
					日
				</div>
				<div class="line">
					<input type="radio" name="day" @click="day_startOn()" id="day_startOn">
					从
					<input class="numberspinner" style="width: 60px;" id="dayStart_1" v-model="dayStart_1" type="number" min="1" max="31">
					日开始，每
					<input class="numberspinner" style="width: 60px;" id="dayEnd_1" v-model="dayEnd_1" type="number" min="1" max="31">
					天执行一次
				</div>
				<div class="line">
					<input type="radio" name="day" @click="day_workDay()" id="day_workDay">
					每月
					<input class="numberspinner" style="width: 60px;" id="dayStart_2" v-model="dayStart_2" type="number" min="1" max="31">
					号最近的那个工作日
				</div>
				<div class="line">
					<input type="radio" name="day" @click="day_lastDay()" id="day_lastDay">
					本月最后一天
				</div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="day" @click="day_appoint()" id="day_appoint">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp dayList">
							<span :value="1" @click="selectDay('1')">01</span>
							<span :value="2" @click="selectDay('2')">02</span>
							<span :value="3" @click="selectDay('3')">03</span>
							<span :value="4" @click="selectDay('4')">04</span>
							<span :value="5" @click="selectDay('5')">05</span>
							<span :value="6" @click="selectDay('6')">06</span>
							<span :value="7" @click="selectDay('7')">07</span>
							<span :value="8" @click="selectDay('8')">08</span>
							<span :value="9" @click="selectDay('9')">09</span>
							<span :value="10" @click="selectDay('10')">10</span>
						</div>
						<div class="imp dayList">
							<span :value="11" @click="selectDay('11')">11</span>
							<span :value="12" @click="selectDay('12')">12</span>
							<span :value="13" @click="selectDay('13')">13</span>
							<span :value="14" @click="selectDay('14')">14</span>
							<span :value="15" @click="selectDay('15')">15</span>
							<span :value="16" @click="selectDay('16')">16</span>
							<span :value="17" @click="selectDay('17')">17</span>
							<span :value="18" @click="selectDay('18')">18</span>
							<span :value="19" @click="selectDay('19')">19</span>
							<span :value="20" @click="selectDay('20')">20</span>
						</div>
						<div class="imp dayList">
							<span :value="21" @click="selectDay('21')">21</span>
							<span :value="22" @click="selectDay('22')">22</span>
							<span :value="23" @click="selectDay('23')">23</span>
							<span :value="24" @click="selectDay('24')">24</span>
							<span :value="25" @click="selectDay('25')">25</span>
							<span :value="26" @click="selectDay('26')">26</span>
							<span :value="27" @click="selectDay('27')">27</span>
							<span :value="28" @click="selectDay('28')">28</span>
							<span :value="29" @click="selectDay('29')">29</span>
							<span :value="30" @click="selectDay('30')">30</span>
						</div>
						<div class="imp dayList">
							<span :value="31" @click="selectDay('31')">31</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--月-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="month" @click="month_everyTime()" id="month_everyTime">
					月 允许的通配符[， - * /]
				</div>
				<div class="line">
					<input type="radio" name="month" @click="month_unAppoint()" id="month_unAppoint">
					不指定
				</div>
				<div class="line">
					<input type="radio" name="month" @click="month_cycle()" id="month_cycle">
					周期从
					<input class="numberspinner" style="width: 60px;" id="monthStart_0" v-model="monthStart_0" type="number" min="1"
					 max="12">
					-
					<input class="numberspinner" style="width: 60px;" id="monthEnd_0" v-model="monthEnd_0" type="number" min="1" max="12">
					月
				</div>
				<div class="line">
					<input type="radio" name="month" @click="month_startOn()" id="month_startOn">
					从
					<input class="numberspinner" style="width: 60px;" id="monthStart_1" v-model="monthStart_1" type="number" min="1"
					 max="12">
					日开始，每
					<input class="numberspinner" style="width: 60px;" id="monthEnd_1" v-model="monthEnd_1" type="number" min="1" max="12">
					月执行一次
				</div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="month" @click="month_appoint()" id="month_appoint">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp monthList">
							<span :value="1" @click="selectMonth('1')">01</span>
							<span :value="2" @click="selectMonth('2')">02</span>
							<span :value="3" @click="selectMonth('3')">03</span>
							<span :value="4" @click="selectMonth('4')">04</span>
							<span :value="5" @click="selectMonth('5')">05</span>
							<span :value="6" @click="selectMonth('6')">06</span>
							<span :value="7" @click="selectMonth('7')">07</span>
							<span :value="8" @click="selectMonth('8')">08</span>
							<span :value="9" @click="selectMonth('9')">09</span>
							<span :value="10" @click="selectMonth('10')">10</span>
							<span :value="11" @click="selectMonth('11')">11</span>
							<span :value="12" @click="selectMonth('12')">12</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--周-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="week" @click="week_everyTime()" id="week_everyTime">
					周 允许的通配符[， - * / L #]
				</div>
				<div class="line">
					<input type="radio" name="week" @click="week_unAppoint()" id="week_unAppoint">
					不指定
				</div>
				<div class="line">
					<input type="radio" name="week" @click="week_startOn()" id="week_startOn">
					周期 从星期
					<input class="numberspinner" style="width: 60px;" id="weekStart_0" v-model="weekStart_0" value="1" type="number"
					 min="1" max="7">
					-
					<input class="numberspinner" style="width: 60px;" id="weekEnd_0" v-model="weekEnd_0" type="number" min="1" max="7">
				</div>
				<div class="line">
					<input type="radio" name="week" @click="week_weekOfDay()" id="week_weekOfDay">
					第
					<input class="numberspinner" style="width: 60px;" id="weekStart_1" v-model="weekStart_1" type="number" min="1" max="4">
					周 的星期
					<input class="numberspinner" style="width: 60px;" id="weekEnd_1" v-model="weekEnd_1" value="1" type="number" min="1"
					 max="7"></div>
				<div class="line">
					<input type="radio" name="week" @click="week_lastWeek()" id="week_lastWeek">
					本月最后一个星期
					<input class="numberspinner" style="width: 60px;" id="weekStart_2" v-model="weekStart_2" value="1" type="number"
					 min="1" max="7"></div>
				<div style="display: flex;">
					<div class="line">
						<input type="radio" name="week" @click="week_appoint()" id="week_appoint">
						指定
					</div>
					<div class="timeDiv">
						<div class="imp weekList">
							<span :value="1" @click="selectWeek('1')">星期日</span>
							<span :value="2" @click="selectWeek('2')">星期一</span>
							<span :value="3" @click="selectWeek('3')">星期二</span>
							<span :value="4" @click="selectWeek('4')">星期三</span>
							<span :value="5" @click="selectWeek('5')">星期四</span>
							<span :value="6" @click="selectWeek('6')">星期五</span>
							<span :value="7" @click="selectWeek('7')">星期六</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--年-->
		<div class="tab-pane" style="display: none">
			<span class="cornLabel" style="padding-top: 3px;vertical-align: top;">启用周期：</span>
			<div style="display: inline-block;">
				<div class="line">
					<input type="radio" checked="checked" name="year" @click="year_unAppoint()" id="year_unAppoint">
					不指定 允许的通配符[， - * /] 非必填
				</div>
				<div class="line">
					<input type="radio" name="year" @click="year_everyTime()" id="year_everyTime">
					每年
				</div>
				<div class="line">
					<input type="radio" name="year" @click="year_cycle()" id="year_cycle">
					周期 从
					<input class="numberspinner" style="width: 90px;" id="yearStart_0" v-model="yearStart_0" value="2016" type="number"
					 min="2016" max="3000">
					-
					<input class="numberspinner" style="width: 90px;" id="yearEnd_0" v-model="yearEnd_0" value="2017" type="number"
					 min="2016" max="3000"></div>
			</div>
			<!--表达式-->
			<div class="cronExp">
				<div>
					<span class="cornLabel" style="vertical-align: top;">表达式字段：</span>
					<table border="0" cellspacing="0" cellpadding="0">
						<thead>
							<tr>
								<td>秒</td>
								<td>分钟</td>
								<td>小时</td>
								<td>日</td>
								<td>月</td>
								<td>周</td>
								<td>年</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{{cron_sec}}</td>
								<td>{{cron_min}}</td>
								<td>{{cron_hour}}</td>
								<td>{{cron_day}}</td>
								<td>{{cron_month}}</td>
								<td>{{cron_week}}</td>
								<td>{{cron_year}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="tong-cron-input-box" :class="{'is-error':errorMsg}">
			<span class="cornLabel">Cron表达式：</span>
			<el-input v-model="cronExpression" @blur="validateCron" style="width:350px;" id="cronExpression"></el-input>
			<el-button type="primary" @click="toCron" class="toCronBtn">反解析</el-button>
			<p class="error-msg">{{errorMsg}}</p>
		</div>
		<div v-if="runTime && runTime.length>0">
			<span class="cornLabel">最近5次运行时间：</span>
			<div style="display: inline-block;vertical-align: top;">
				<p v-for="(time,index) in runTime" :key="index">{{time}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { trim } from '../../../js/usual'
	import cronValidate from './cron'
	export default {
		name: "tongCron",
		props: {
			propsCron: String,
			runTime: Array,
		},
		data: function() {
			return {
				secStart_0: 1,
				secEnd_0: 2,
				secStart_1: 0,
				secEnd_1: 1,
				minStart_0: 1,
				minEnd_0: 2,
				minStart_1: 0,
				minEnd_1: 1,
				hourStart_0: 0,
				hourEnd_0: 2,
				hourStart_1: 0,
				hourEnd_1: 1,
				dayStart_0: 1,
				dayEnd_0: 2,
				dayStart_1: 1,
				dayEnd_1: 1,
				dayStart_2: 1,
				monthStart_0: 1,
				monthEnd_0: 2,
				monthStart_1: 1,
				monthEnd_1: 1,
				weekStart_0: 1,
				weekEnd_0: 2,
				weekStart_1: 1,
				weekEnd_1: 1,
				weekStart_2: 1,
				yearStart_0: 2018,
				yearEnd_0: 2019,
				cron_sec: "*",
				cron_min: "*",
				cron_hour: "*",
				cron_day: "*",
				cron_month: "*",
				cron_week: "*",
				cron_year: "*",
				cronExpression: this.propsCron || "* * * * * ? *",

				errorMsg:""
			}
		},
		mounted: function() {

			$(".tab-pane input").click(function(e) {
				$(this).siblings("[type='radio']").prop('checked', 'checked').click();
			})
			this.toCron();
		},
		watch: {
			cron_sec: {
				handler(val, oldval) {
					this.cronExp()
				},
				deep: true,
			},
			cron_min: {
				handler(val, oldval) {
					this.cronExp()
				},
			},
			cron_hour: {
				handler(val, oldval) {
					this.cronExp()
				},
			},
			cron_day: {
				handler(val, oldval) {
					this.cronExp()
				},
			},
			cron_month: {
				handler(val, oldval) {
					this.cronExp()
				},
			},
			cron_week: {
				handler(val, oldval) {
					this.cronExp()
				},
			},
			cron_year: {
				handler(val, oldval) {
					this.cronExp()
				},
			}
		},
		methods: {
			/**
			 * 获取校验结果信息
			 */
			validate(){
				this.cronExpression = trim(this.cronExpression, 2)
				let res = cronValidate(this.cronExpression);
				return {
					message:res===true?"校验通过":res,
					res:res===true
				}
			},

			validateCron() {
				// 去掉前后空格
				this.cronExpression = trim(this.cronExpression, 2)
				let res = cronValidate(this.cronExpression)
				// 返回true，则cron校验通过； 返回string， 则返回错误信息
				this.errorMsg = "";
				if(typeof(res) == "string") {
					this.errorMsg = res;
				}
			},
			showTabs: function(event, num) {
				jQuery(event.currentTarget).parent("li").addClass("active").siblings().removeClass("active");
				jQuery(".tab-pane").eq(num).show().siblings(".tab-pane").hide();
				this.toCron()
			},
			cronExp: function() {
				this.cronExpression = this.cron_sec + " " + this.cron_min + " " + this.cron_hour + " " + this.cron_day + " " +
					this.cron_month + " " + this.cron_week + " " + this.cron_year;
			},

			clearSelected(){
				$(".timeDiv span").removeClass("active")
			},
			// 秒
			sec_everyTime: function() {
				this.cron_sec = "*";

				this.clearSelected()
			},
			sec_cycle: function() {
				this.cron_sec = this.secStart_0 + "-" + this.secEnd_0;
				this.clearSelected()
			},
			sec_startOn: function() {
				this.cron_sec = this.secStart_1 + "/" + this.secEnd_1;
				this.clearSelected()
			},
			sec_appoint: function() {
				var arr = [];
				$(".secList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_sec = str||"0";

				setTimeout(this.toCron,100)
			},
			selectSec: function(value) {
				$(".secList span[value='" + value + "']").hasClass("active") ? $(".secList span[value='" + value + "']").removeClass(
					"active") : $(".secList span[value='" + value + "']").addClass("active");
				$("#sec_appoint").prop('checked', 'checked').click();
			},
			// 分钟
			min_everyTime: function() {
				this.cron_min = "*";
				this.clearSelected()
			},
			min_cycle: function() {
				this.cron_min = this.minStart_0 + "-" + this.minEnd_0;
				this.clearSelected()
			},
			min_startOn: function() {
				this.cron_min = this.minStart_1 + "/" + this.minEnd_1;
				this.clearSelected()
			},
			min_appoint: function() {
				var arr = [];
				$(".minList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_min = str||"0";

				setTimeout(this.toCron,100)
			},
			selectMin: function(value) {
				$(".minList span[value='" + value + "']").hasClass("active") ? $(".minList span[value='" + value + "']").removeClass(
					"active") : $(".minList span[value='" + value + "']").addClass("active");
				$("#min_appoint").prop('checked', 'checked').click();
			},
			// 小时
			hour_everyTime: function() {
				this.cron_hour = "*";
				this.clearSelected()
			},
			hour_cycle: function() {
				this.cron_hour = this.hourStart_0 + "-" + this.hourEnd_0;
				this.clearSelected()
			},
			hour_startOn: function() {
				this.cron_hour = this.hourStart_1 + "/" + this.hourEnd_1;
				this.clearSelected()
			},
			hour_appoint: function() {
				var arr = [];
				$(".hourList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_hour = str||"0";

				setTimeout(this.toCron,100)
			},
			selectHour: function(value) {
				$(".hourList span[value='" + value + "']").hasClass("active") ? $(".hourList span[value='" + value + "']").removeClass(
					"active") : $(".hourList span[value='" + value + "']").addClass("active");
				$("#hour_appoint").prop('checked', 'checked').click();
			},
			// 日
			day_everyTime: function() {
				this.cron_day = "*";
				this.cron_week = "?";
				this.clearSelected()
			},
			day_cycle: function() {
				this.cron_day = this.dayStart_0 + "-" + this.dayEnd_0;
				this.cron_week = "?";
				this.clearSelected()
			},
			day_unAppoint: function() {
				this.cron_day = "?";
				this.clearSelected()
			},
			day_workDay: function() {
				this.cron_day = this.dayStart_2 + "W";
				this.cron_week = "?";
				this.clearSelected()
			},
			day_lastDay: function() {
				this.cron_day = "L";
				this.cron_week = "?";
				this.clearSelected()
			},
			day_startOn: function() {
				this.cron_day = this.dayStart_1 + "/" + this.dayEnd_1;
				this.cron_week = "?";
				this.clearSelected()
			},
			day_appoint: function() {
				var arr = [];
				$(".dayList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_day = str||"1";
                this.cron_week = "?";
				setTimeout(this.toCron,100)
			},
			selectDay: function(value) {
				$(".dayList span[value='" + value + "']").hasClass("active") ? $(".dayList span[value='" + value + "']").removeClass(
					"active") : $(".dayList span[value='" + value + "']").addClass("active");
				$("#day_appoint").prop('checked', 'checked').click();
			},
			// 月
			month_everyTime: function() {
				this.cron_month = "*";
				this.clearSelected()
			},
			month_cycle: function() {
				this.cron_month = this.monthStart_0 + "-" + this.monthEnd_0;
				this.clearSelected()
			},
			month_unAppoint: function() {
				this.cron_month = "?";
				this.clearSelected()
			},
			month_startOn: function() {
				this.cron_month = this.monthStart_1 + "/" + this.monthEnd_1;
				this.clearSelected()
			},
			month_appoint: function() {
				var arr = [];
				$(".monthList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_month = str||"1";

				setTimeout(this.toCron,100)
			},
			selectMonth: function(value) {
				$(".monthList span[value='" + value + "']").hasClass("active") ? $(".monthList span[value='" + value + "']").removeClass(
					"active") : $(".monthList span[value='" + value + "']").addClass("active");
				$("#month_appoint").prop('checked', 'checked').click();
			},
			// 周
			week_everyTime: function() {
				this.cron_week = "*";
				this.cron_day = "?";
				this.clearSelected()
			},
			week_unAppoint: function() {
				this.cron_week = "?";
				this.clearSelected()
			},
			week_startOn: function() {
				this.cron_week = this.weekStart_0 + "/" + this.weekEnd_0;
				this.cron_day = "?";
				this.clearSelected()
			},
			week_weekOfDay: function() {
				this.cron_week = this.weekStart_1 + "#" + this.weekEnd_1;
				this.cron_day = "?";
				this.clearSelected()
			},
			week_lastWeek: function() {
				this.cron_week = this.weekStart_2 + "L";
				this.cron_day = "?";
				this.clearSelected()
			},
			week_appoint: function() {
				var arr = [];
				$(".weekList span.active").each(function(index, elem) {
					arr.push(Number($(elem).attr("value")))
				})
				var str = arr.join(",")
				this.cron_week = str||"1";
                this.cron_day = "?";
				setTimeout(this.toCron,100)
			},
			selectWeek: function(value) {
				$(".weekList span[value='" + value + "']").hasClass("active") ? $(".weekList span[value='" + value + "']").removeClass(
					"active") : $(".weekList span[value='" + value + "']").addClass("active");
				$("#week_appoint").prop('checked', 'checked').click();
			},
			// 年
			year_unAppoint: function() {
				this.cron_year = " ";
			},
			year_everyTime: function() {
				this.cron_year = "*";
			},
			year_cycle: function() {
				this.cron_year = this.yearStart_0 + "-" + this.yearEnd_0;
			},
			// 反解析
			toCron: function() {
				this.errorMsg = "";
				if(!this.cronExpression){
					this.errorMsg = "cron表达式不能为空";
					return
				}
				var crontab = this.cronExpression.split(" ");
				// 秒  分钟  时  日  月  周  年
				this.cron_sec = crontab[0] || "*";
				this.cron_min = crontab[1] || "*";
				this.cron_hour = crontab[2] || "*";
				this.cron_day = crontab[3] || "*";
				this.cron_month = crontab[4] || "*";
				this.cron_week = crontab[5] || "*";
				this.cron_year = crontab[6] || "*";
				if (crontab[6] == undefined) {
					this.cron_year = " ";
				} else {
					this.cron_year = crontab[6];
				}

				crontab = [
					this.cron_sec,
					this.cron_min,
					this.cron_hour,
					this.cron_day,
					this.cron_month,
					this.cron_week, 
					this.cron_year, 
				]

				// 秒
				if (crontab[0].indexOf("*") != -1) {
					jQuery("input[name='sec']").eq(0).prop("checked", "checked");
				} else if (crontab[0].indexOf("-") != -1) {
					var second = crontab[0].split("-");
					second[0] = Number(second[0]);
					second[1] = Number(second[1]);
					this.secStart_0 = second[0];
					this.secEnd_0 = second[1];
					jQuery("input[name='sec']").eq(1).prop("checked", "checked");
				} else if (crontab[0].indexOf("/") != -1) {
					var second = crontab[0].split("/");
					second[0] = Number(second[0]);
					second[1] = Number(second[1]);
					this.secStart_1 = second[0];
					this.secEnd_1 = second[1];
					jQuery("input[name='sec']").eq(2).prop("checked", "checked");
				} else if (crontab[0].indexOf(",") != -1) {
					var second = crontab[0].split(",");
					jQuery("input[name='sec']").eq(3).prop("checked", "checked");
					jQuery(".secList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < second.length; i++) {
						jQuery(".secList>span").eq(second[i]).addClass("active")
					}
				} else if (crontab[0] == Number(crontab[0]) && crontab[0] < 60 && crontab[0] >= 0) {
					jQuery("input[name='sec']").eq(3).prop("checked", "checked");
					jQuery(".secList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".secList>span").eq(crontab[0]).addClass("active")
				}
				// 分钟
				if (crontab[1].indexOf("*") != -1) {
					jQuery("input[name='min']").eq(0).prop("checked", "checked");
				} else if (crontab[1].indexOf("-") != -1) {
					var minite = crontab[1].split("-");
					minite[0] = Number(minite[0]);
					minite[1] = Number(minite[1]);
					this.minStart_0 = minite[0];
					this.minEnd_0 = minite[1];
					jQuery("input[name='min']").eq(1).prop("checked", "checked");
				} else if (crontab[1].indexOf("/") != -1) {
					var minite = crontab[1].split("/");
					minite[0] = Number(minite[0]);
					minite[1] = Number(minite[1]);
					this.minStart_1 = minite[0];
					this.minEnd_1 = minite[1];
					jQuery("input[name='min']").eq(2).prop("checked", "checked");
				} else if (crontab[1].indexOf(",") != -1) {
					var minite = crontab[1].split(",");
					jQuery("input[name='min']").eq(3).prop("checked", "checked");
					jQuery(".minList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < minite.length; i++) {
						jQuery(".minList>span").eq(minite[i]).addClass("active")
					}
				} else if (crontab[1] == Number(crontab[1]) && crontab[1] < 60 && crontab[1] >= 0) {
					jQuery("input[name='min']").eq(3).prop("checked", "checked");
					jQuery(".minList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".minList>span").eq(crontab[1]).addClass("active")
				}
				// 小时
				if (crontab[2].indexOf("*") != -1) {
					jQuery("input[name='hour']").eq(0).prop("checked", "checked");
				} else if (crontab[2].indexOf("-") != -1) {
					var hour = crontab[2].split("-");
					hour[0] = Number(hour[0]);
					hour[1] = Number(hour[1]);
					this.hourStart_0 = hour[0];
					this.hourEnd_0 = hour[1];
					jQuery("input[name='hour']").eq(1).prop("checked", "checked");
				} else if (crontab[2].indexOf("/") != -1) {
					var hour = crontab[2].split("/");
					hour[0] = Number(hour[0]);
					hour[1] = Number(hour[1]);
					this.hourStart_1 = hour[0];
					this.hourEnd_1 = hour[1];
					jQuery("input[name='hour']").eq(2).prop("checked", "checked");
				} else if (crontab[2].indexOf(",") != -1) {
					var hour = crontab[2].split(",");
					jQuery("input[name='hour']").eq(3).prop("checked", "checked");
					jQuery(".hourList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < hour.length; i++) {
						jQuery(".hourList>span").eq(hour[i]).addClass("active")
					}
				} else if (crontab[2] == Number(crontab[2]) && crontab[2] < 60 && crontab[2] >= 0) {
					jQuery("input[name='hour']").eq(3).prop("checked", "checked");
					jQuery(".hourList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".hourList>span").eq(crontab[2]).addClass("active")
				}
				// 日
				if (crontab[3].indexOf("*") != -1) {
					jQuery("input[name='day']").eq(0).prop("checked", "checked");
				} else if (crontab[3].indexOf("?") != -1) {
					jQuery("input[name='day']").eq(1).prop("checked", "checked");
				} else if (crontab[3].indexOf("-") != -1) {
					var day = crontab[3].split("-");
					day[0] = Number(day[0]);
					day[1] = Number(day[1]);
					this.dayStart_0 = day[0];
					this.dayEnd_0 = day[1];
					jQuery("input[name='day']").eq(2).prop("checked", "checked");
				} else if (crontab[3].indexOf("/") != -1) {
					var day = crontab[3].split("/");
					day[0] = Number(day[0]);
					day[1] = Number(day[1]);
					this.dayStart_1 = day[0];
					this.dayEnd_1 = day[1];
					jQuery("input[name='day']").eq(3).prop("checked", "checked");
				} else if (crontab[3].indexOf("W") != -1) {
					var day = crontab[3].split("W");
					day[0] = Number(day[0]);
					this.dayStart_2 = day[0];
					jQuery("input[name='day']").eq(4).prop("checked", "checked");
				} else if (crontab[3].indexOf("L") != -1) {
					jQuery("input[name='day']").eq(5).prop("checked", "checked");
				} else if (crontab[3].indexOf(",") != -1) {
					var day = crontab[3].split(",");
					jQuery("input[name='day']").eq(6).prop("checked", "checked");
					jQuery(".dayList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < day.length; i++) {
						jQuery(".dayList>span").eq(day[i] - 1).addClass("active")
					}
				} else if (crontab[3] == Number(crontab[3]) && crontab[3] <= 31 && crontab[3] > 0) {
					jQuery("input[name='day']").eq(6).prop("checked", "checked");
					jQuery(".dayList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".dayList>span").eq(crontab[3] - 1).addClass("active")
				}
				// 月
				if (crontab[4].indexOf("*") != -1) {
					jQuery("input[name='month']").eq(0).prop("checked", "checked");
				} else if (crontab[4].indexOf("?") != -1) {
					jQuery("input[name='month']").eq(1).prop("checked", "checked");
				} else if (crontab[4].indexOf("-") != -1) {
					var month = crontab[4].split("-");
					month[0] = Number(month[0]);
					month[1] = Number(month[1]);
					this.monthStart_0 = month[0];
					this.monthEnd_0 = month[1];
					jQuery("input[name='month']").eq(2).prop("checked", "checked");
				} else if (crontab[4].indexOf("/") != -1) {
					var month = crontab[4].split("/");
					month[0] = Number(month[0]);
					month[1] = Number(month[1]);
					this.monthStart_1 = month[0];
					this.monthEnd_1 = month[1];
					jQuery("input[name='month']").eq(3).prop("checked", "checked");
				} else if (crontab[4].indexOf(",") != -1) {
					var month = crontab[4].split(",");
					jQuery("input[name='month']").eq(4).prop("checked", "checked");
					jQuery(".monthList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < month.length; i++) {
						jQuery(".monthList>span").eq(month[i] - 1).addClass("active")
					}
				} else if (crontab[4] == Number(crontab[4]) && crontab[4] <= 12 && crontab[4] > 0) {
					jQuery("input[name='month']").eq(4).prop("checked", "checked");
					jQuery(".monthList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".monthList>span").eq(crontab[4] - 1).addClass("active")
				}
				// 周
				if (crontab[5].indexOf("*") != -1) {
					jQuery("input[name='week']").eq(0).prop("checked", "checked");
				} else if (crontab[5].indexOf("?") != -1) {
					jQuery("input[name='week']").eq(1).prop("checked", "checked");
				} else if (crontab[5].indexOf("/") != -1) {
					var week = crontab[5].split("/");
					week[0] = Number(week[0]);
					week[1] = Number(week[1]);
					this.weekStart_0 = week[0];
					this.weekEnd_0 = week[1];
					jQuery("input[name='week']").eq(2).prop("checked", "checked");
				} else if (crontab[5].indexOf("#") != -1) {
					var week = crontab[5].split("#");
					week[0] = Number(week[0]);
					week[1] = Number(week[1]);
					this.weekStart_1 = week[0];
					this.weekEnd_1 = week[1];
					jQuery("input[name='week']").eq(3).prop("checked", "checked");
				} else if (crontab[5].indexOf("L") != -1) {
					var week = crontab[5].split("L");
					week[0] = Number(week[0]);
					this.weekStart_2 = week[0];
					jQuery("input[name='week']").eq(4).prop("checked", "checked");
				} else if (crontab[5].indexOf(",") != -1) {
					var week = crontab[5].split(",");
					jQuery("input[name='week']").eq(5).prop("checked", "checked");
					jQuery(".weekList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					for (var i = 0; i < week.length; i++) {
						jQuery(".weekList>span").eq(week[i] - 1).addClass("active")
					}
				} else if (crontab[5] == Number(crontab[5]) && crontab[5] <= 7 && crontab[5] > 0) {
					jQuery("input[name='week']").eq(5).prop("checked", "checked");
					jQuery(".weekList>span").each(function(index, elem) {
						jQuery(elem).removeClass("active");
					})
					jQuery(".weekList>span").eq(crontab[5] - 1).addClass("active")
				}
				// 年
				if (crontab[6] == undefined) {
					jQuery("input[name='year']").eq(0).prop("checked", "checked");
				} else if (crontab[6].indexOf("*") != -1) {
					jQuery("input[name='year']").eq(1).prop("checked", "checked");
				} else if (crontab[6].indexOf("-") != -1) {
					var year = crontab[6].split("-");
					year[0] = Number(year[0]);
					year[1] = Number(year[1]);
					this.yearStart_0 = year[0];
					this.yearEnd_0 = year[1];
					jQuery("input[name='year']").eq(2).prop("checked", "checked");
				}
				return false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	ul.tab {
		border-bottom: 1px solid #e3e3e3;
		box-sizing: border-box;
		padding-left: 10px;
		margin-bottom: 8px;
	}

	ul.tab>li {
		display: inline-block;
		padding: 5px 0px;
		color: #585b64;
		border: 1px solid transparent;
		position: relative;
		top: 1px;
	}

	ul.tab>li>a {
		padding: 5px 20px;
		cursor: pointer;
	}

	ul.tab>li.active {
		color: #298ef9;
		border: 1px solid #e3e3e3;
		border-bottom: 1px solid #fff;
	}
	input[type="radio"] {
		vertical-align: middle;
		line-height: 1;
		margin-top: -3px;
		margin-right: 6px;
	}
	p {
		margin: 9px 0;
	}

	.line {
		height: 30px;
		line-height: 30px;
		margin-bottom: 6px;
	}

	.timeDiv {
		display: inline-block;
		border: 1px solid #DBDADF;
		margin-left:5px;
		padding: 5px 8px;
		/*width:280px;*/
	}

	.imp {
		margin-top: 2px;
		margin-bottom: 2px;
	}

	.imp span {
		color: #298ef9;
		background: #fff;
		padding: 2px 8px;
		border-radius: 2px;
		display: inline-block;
		cursor: pointer;
		/*不能选中文字*/
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.imp span.active {
		color: #fff;
		background: #298ef9;
	}

	table {
		display: inline-block;
		border-right: 1px solid #DBDADF;
		border-bottom: 1px solid #DBDADF;
		/* margin-left: 3px; */
	}

	td {
		border-left: 1px solid #DBDADF;
		border-top: 1px solid #DBDADF;
		padding: 6px 5px;
		width: 50px;
		max-width: 50px;
		box-sizing: border-box;
		overflow: hidden;
	}

	thead td {
		text-align: center;
	}

	.cronExp>div {
		margin-top: 5px;
	}

	.toCronBtn {
		margin-left: 6px;
	}

	.cornLabel {
		color: #6C7280;
		line-height: 30px;
		width: 110px;
		padding-right: 6px;
		display: inline-block;
		text-align: right;
	}

	input[type="number"]{
		box-sizing: border-box;
		height: 30px;
		line-height: 30px;
		border: 1px solid #DBDADF;
		padding: 0 0 0 10px;
		&:focus {
			border-color: #3A8CE2;
			outline: 0;
		}
		&:hover {
			border-color: #9EA4B3;
		}
	}
	.el-input {
		.el-input__inner {border-radius: 0;}
	}

	.tong-cron-input-box{
		margin-bottom: 8px;margin-top: 8px; position:relative;
		.error-msg{
			display: none;
			position: absolute;
			margin: 0;
			left: 110px;
			top: 31px;
		}

		&.is-error{
			::v-deep .el-input__inner{
				border: 1px solid red;
			}
			.error-msg{
				display: inline-block;
				color: red;
			}

		}
	}
</style>
