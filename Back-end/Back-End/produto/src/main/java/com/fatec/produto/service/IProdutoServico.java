package com.fatec.produto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.fatec.produto.model.Catalogo;
import com.fatec.produto.model.Produto;

public interface IProdutoServico {
	public List<Catalogo> consultaCatalogo();

	public List<Catalogo> consultaPorDescricao(String descricao);

	public Optional<Produto> cadastrar(Produto produto);

	public Optional<Produto> consultarPorId(String id);

	public Optional<Produto> atualizar(Long id, Produto produto);

	public ResponseEntity<Produto> excluir(Long id);

	
}
