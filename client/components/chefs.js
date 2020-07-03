import { Component } from "react";
import { connect } from "react-redux";
import { CREATE_CHEF, LOAD_RECIPES } from "../actions/actions";

class Chefs extends Component {
  componentDidMount() {
    const { getChefs } = this.props;

    getChefs();
  }

  render() {
    const { chefs } = this.props;

    return (
      <div>
        <div>
          <form onSubmit={(e) => handleSubmit(e, firstName)}>
            <input
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <button>Add Chef</button>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {chefs.map((chef) => {
            return (
              <ul>
                <li key={student} style={{}}>
                  {chef.firstName}
                  <ul>
                    {chef.recipes.map((recipe) => (
                      <li key={recipe}>{recipe}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    getChefs: () => {
      dispatch(() => {
        return axios.get("/fetch/chefs").then((res) => {
          const {
            data: { chefs },
          } = res;
          dispatch(loadChefs);
        });
      });
    },
    handleChange: (e) => {
      store.dispatch({
        type: CREATE_CHEF,
        firstName: e.target.value,
      });
    },
    handleSubmit: (e, firstName) => {
      e.preventDefault();

      dispatch(() => {
        axios
          .post("/api/chefs", { firstName: firstName })
          .then(() => {
            return axios.get("/api/chefs");
          })
          .then((res) => {
            dispatch({
              type: LOAD_CHEFS,
              chefs: res.data.chefs,
            });
          });
      });
    },
  };
};

const ConnectedChefs = connect(mapStateToProps, mapDispatchToProps)(Chefs);
