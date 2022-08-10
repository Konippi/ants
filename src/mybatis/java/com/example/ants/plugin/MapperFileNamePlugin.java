package com.example.ants.plugin;

import java.util.List;

import org.mybatis.generator.api.IntrospectedTable;
import org.mybatis.generator.api.PluginAdapter;

/**
 * MyBatis Generator で自動生成するファイル名についてのプラグイン
 */
public class MapperFileNamePlugin extends PluginAdapter {
    @Override
    public boolean validate(final List<String> warnings) {
        return true;
    }

    @Override
    public void initialized(final IntrospectedTable introspectedTable) {
        final var javaClassName = introspectedTable.getMyBatis3JavaMapperType();
        introspectedTable.setMyBatis3JavaMapperType(javaClassName.replaceAll("Mapper$", "BaseMapper"));

        final var xmlFileName = introspectedTable.getMyBatis3XmlMapperFileName();
        introspectedTable.setMyBatis3XmlMapperFileName(xmlFileName.replaceAll("Mapper\\.xml", "BaseMapper.xml"));
    }
}
