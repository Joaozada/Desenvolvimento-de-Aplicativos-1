package if_else;

import java.util.Scanner;

public class triangulo {

	public static void main(String[] args) {

		int sideOne, sideTwo, sideThree;
		
		Scanner tec = new Scanner(System.in);
		
		System.out.println("Digite o primeiro lado:");
		sideOne = tec.nextInt();
		
		
		System.out.println("Digite o segundo lado:");
		sideTwo = tec.nextInt();
		
		
		System.out.println("Digite o terceiro lado:");
		sideThree = tec.nextInt();
		
		
		if((sideOne < sideTwo + sideThree) && (sideTwo < sideOne + sideThree) && (sideThree < sideOne + sideTwo)) {
			if (sideOne == sideTwo && sideOne == sideThree) {
				System.out.println("Tri�ngulo Equilatero");
			} else if((sideOne == sideTwo) || (sideOne ==sideThree)) {
				System.out.println("Tri�ngulo Isosceles");
			} else
				System.out.println("Tri�ngulo Escaleno");
		} else {
			System.out.println("N�o � um tri�ngulo!");
		}
	
	}	
}