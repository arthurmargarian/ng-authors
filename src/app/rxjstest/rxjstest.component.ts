import {Component} from '@angular/core';
import {AsyncSubject, BehaviorSubject, from, fromEvent, interval, of, ReplaySubject, Subject} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-rxjstest',
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.css']
})
export class RxjstestComponent {
  sub;
  secondsCounter;

  constructor() {
    // const nums = of(1, 2, 3);
    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);
    //
    // squaredNums.subscribe(x => console.log(x));

    const subject = new Subject();
    const asyncSubject = new AsyncSubject();
    const behaviorSubject = new BehaviorSubject('a');
    const replaySubject = new ReplaySubject(2);

    const subjects = [subject, asyncSubject, behaviorSubject, replaySubject];
    const log = subjectType => e => console.log(`${subjectType}: ${e}`);

    console.log('SUBSCRIBE 1');
    subject.subscribe(log('s1 subject'));
    asyncSubject.subscribe(log('s1 asyncSubject'));
    behaviorSubject.subscribe(log('s1 behaviorSubject'));
    replaySubject.subscribe(log('s1 replaySubject'));

    console.log('\nNEXT(r)');
    subjects.forEach(o => o.next('r'));

    console.log('\nNEXT(x)');
    subjects.forEach(o => o.next('x'));

    console.log('\nSUBSCRIBE 2');
    subject.subscribe(log('s2 subject'));
    asyncSubject.subscribe(log('s2 asyncSubject'));
    behaviorSubject.subscribe(log('s2 behaviorSubject'));
    replaySubject.subscribe(log('s2 replaySubject'));

    console.log('\nNEXT(j)');
    subjects.forEach(o => o.next('j'));

    console.log('\nCOMPLETE');
    subjects.forEach(o => o.complete());

    console.log('\nNEXT(s)');
    subjects.forEach(o => o.next('s'));


  }


  startTimer() {
    this.secondsCounter = interval(1000);
    this.sub = this.secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));
  }

  stopTimer() {
    this.sub.unsubscribe();
  }

}
