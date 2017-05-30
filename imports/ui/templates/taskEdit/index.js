import './index.html'
import sweetAlert from 'sweetalert';

AutoForm.hooks({
  taskEdit:{
    after: {
        "method-update"(error) {
          if(error)
            sweetAlert("Error!", error.message , "error");
          else
            sweetAlert("Success!", "You updated the task successfully", "success");
          Router.go('home');
        }
    }
  }
});
