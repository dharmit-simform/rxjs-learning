import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { ListComponent } from './observables/list/list.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { MapComponent } from './observables/map/map.component';
import { FilterComponent } from './observables/filter/filter.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { TapComponent } from './observables/tap/tap.component';
import { TakeComponent } from './observables/take/take.component';
import { RetryComponent } from './observables/retry/retry.component';
import { DebounceTimeComponent } from './observables/debounce-time/debounce-time.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { BehaviourSubjectComponent } from './observables/behaviour-subject/behaviour-subject.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observables/concat-merge/concat-merge.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observables/share-replay/share-replay.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './observables/zip-fork-join/zip-fork-join.component';
import { CatchErrorComponent } from './observables/catch-error/catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    FilterComponent,
    PluckComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    ConcatMapComponent,
    ReplaySubjectComponent,
    BehaviourSubjectComponent,
    AsyncSubjectComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipForkJoinComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
