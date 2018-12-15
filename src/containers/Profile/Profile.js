import React from 'react';
import FormButton from '../../components/Button/FormButton';
import Input from '../../components/Forms/Input';

class Profile extends React.Component {
    
    state={
      formValues: {},
      loading: false,
      error: {},
    }

    static getDerivedStateFromProps(props, state) {
      if (props.userStore.user) {
        props.history.push('/dashboard');
      }
      if (props.userStore.error && state.error !== props.userStore.error) {
        return { error: props.userStore.error, loading: false };
      }
      return null;
    }

    /**
     * profile Function
     */
    profileUser = () => {
      const { profile } = this.props;
      const { formValues } = this.state;
      profile(formValues);

      this.setState(state => ({ loading: !state.loading }));
    }

    handleChange = (e) => {
      const { formValues } = this.state;
      formValues[e.target.name] = e.target.value;
      this.setState(() => ({ formValues }));
    }


    render() {
      const { formValues, loading, error } = this.state;
      return (
        <div className="signUp_Form">
          <h4 className="center-align">Please Fill The Details</h4>
          <div className="row">
            <form>
              <div className="row">
                <Input
                  value={formValues.firstname}
                  placeholder="First Name"
                  label="First Name"
                  name="firstname"
                  onChange={this.handleChange}
                  error={error.firstname}
                />
                <Input
                  value={formValues.lastname}
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastname"
                  onChange={this.handleChange}
                  error={error.lastname}
                />
                <Input
                  value={formValues.company}
                  placeholder="Company"
                  label="Company"
                  name="company"
                  onChange={this.handleChange}
                  error={error.company}
                />
                <Input
                  value={formValues.department}
                  placeholder="Department"
                  label="Department"
                  name="department"
                  onChange={this.handleChange}
                  error={error.department}
                />
                <Input
                  value={formValues.position}
                  placeholder="Position"
                  label="Position"
                  name="position"
                  onChange={this.handleChange}
                  error={error.position}
                />
                <Input
                  value={formValues.email}
                  placeholder="Email"
                  label="Email"
                  name="email"
                  onChange={this.handleChange}
                  error={error.email}
                />
                
                <FormButton type="submit" text="Save" onClick={this.profileUser} disabled={loading} />
                
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default Profile;
