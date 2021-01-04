class BudgetApp extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/shows" exact component={ListShowsComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}