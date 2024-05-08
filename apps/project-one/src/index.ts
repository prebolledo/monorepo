import { makeAddUserUseCase } from "./use-cases/add-user";

const init = async () => {
  const addUserUseCase = makeAddUserUseCase();
  const user = await addUserUseCase({name: "pablo", email: "pablo@gmai.com"});
  console.log({user});
};

init();