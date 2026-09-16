function onFormLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    alert("OnLoad fired");
    formContext.getAttribute("ops_sladeadline").addOnChange(onDeadlineChange);
}

function onDeadlineChange() {
    alert("Field changed");
}