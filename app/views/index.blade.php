@section('main')
    <div ng-controller="analyticsCtrl">
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
            <h6 class="page-header">分析結果</h6>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>村里</th>
                        <th>未篩人數</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in result">
                        <td><% key %></td>
                        <td><% value %></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('scripts')
    {{ HTML::script('/scripts/app.js') }}
    {{ HTML::script('/scripts/home.js') }}
@stop