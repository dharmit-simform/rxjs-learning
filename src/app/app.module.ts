import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { AsyncSubjectComponent } from './observables/async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './observables/behaviour-subject/behaviour-subject.component';
import { CatchErrorComponent } from './observables/catch-error/catch-error.component';
import { CombineLatestComponent } from './observables/combine-latest/combine-latest.component';
import { Comp1Component } from './observables/components/comp1/comp1.component';
import { Comp2Component } from './observables/components/comp2/comp2.component';
import { Comp3Component } from './observables/components/comp3/comp3.component';
import { ConcatMapComponent } from './observables/concat-map/concat-map.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './observables/debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './observables/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observables/filter/filter.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { ListComponent } from './observables/list/list.component';
import { MapComponent } from './observables/map/map.component';
import { MergeMapComponent } from './observables/merge-map/merge-map.component';
import { MergeComponent } from './observables/merge/merge.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { ReplaySubjectComponent } from './observables/replay-subject/replay-subject.component';
import { RetryComponent } from './observables/retry/retry.component';
import { ShareReplayComponent } from './observables/share-replay/share-replay.component';
import { SwitchMapComponent } from './observables/switch-map/switch-map.component';
import { TakeComponent } from './observables/take/take.component';
import { TapComponent } from './observables/tap/tap.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { ZipForkJoinComponent } from './observables/zip-fork-join/zip-fork-join.component';
import { PromiseComponent } from './promise/promise.component';

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
    MergeMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipForkJoinComponent,
    CatchErrorComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
