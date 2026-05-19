class BankAcc{
   readonly userId:number;
  userName:String;
  userBalance:number;

  constructor(userId:number,userName:string,userBalance:number){
    this.userId = userId,
    this.userName = userName,
    this.userBalance = userBalance

  }
}

const LiamAcc = new BankAcc(222, "Liam", 2000)
LiamAcc.userId(222)