package com.fatec.produto.model;

import lombok.Data;

public @Data class Catalogo {
    private Long id;
    private String descricao;
    private String categoria;
    private int quantidadeU;
    private double valUnitario;
    private double valTotal;
    private byte[] imagem;

}