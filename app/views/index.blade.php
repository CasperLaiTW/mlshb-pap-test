@section('main')
    <div ng-controller="analyticsCtrl" ng-init="init();">
        <div class="jumbotron">
            <h1>名單分析</h1>
            <div class="form-group">
                <label for="source">
                    <input type="file" id="source" accept=".txt,.csv">
                    請選擇名單
                </label>
            </div>
            <button type="button" class="btn btn-primary" ng-click="analytics();">開始分析</button>
        </div>

        <div class="result" ng-show="isAnalytics">

        </div>
    </div>
@stop

@section('scripts')
    {{ HTML::script('/scripts/app.js') }}
    {{ HTML::script('/scripts/home.js') }}
@stop