import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { ListComponent } from './observables/list/list.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { RetryComponent } from './observables/retry/retry.component';
import { DebounceTimeComponent } from './observables/debounce-time/debounce-time.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { BehaviourSubjectComponent } from './observables/behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observables/concat-merge/concat-merge.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observables/share-replay/share-replay.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './observables/zip-fork-join/zip-fork-join.component';
import { CatchErrorComponent } from './observables/catch-error/catch-error.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce-time', component: DebounceTimeComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'behavior-subject', component: BehaviourSubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat-merge', component: ConcatMergeComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'exhaust-map', component: ExhaustMapComponent },
      { path: 'share-replay', component: ShareReplayComponent },
      { path: 'combine-latest', component: CombineLatestComponent },
      { path: 'zip-fork-join', component: ZipForkJoinComponent },
      { path: 'catch-error', component: CatchErrorComponent },
    ]
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
