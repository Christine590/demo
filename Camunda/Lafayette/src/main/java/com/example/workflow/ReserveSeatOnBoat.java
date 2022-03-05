package com.example.workflow;

import javax.inject.Named;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Service;

@Service("reserveSeatOnBoat")
public class ReserveSeatOnBoat implements JavaDelegate{
	@Named
	@Override
	public void execute(DelegateExecution delegateExecution) throws Exception {
		// TODO Auto-generated method stub
		
		String money = "0.0";
		String ticketType = "Coach";
		
		money = (String) delegateExecution.getVariable("money");
		double moneyDouble = Double.parseDouble(money);
		
		if (moneyDouble >= 10000) {
			ticketType = "First class";
		} else if (moneyDouble >= 5000) {
			ticketType = "Bussiness class";
		}
		
		delegateExecution.setVariable("ticketType", ticketType);
	}

}
