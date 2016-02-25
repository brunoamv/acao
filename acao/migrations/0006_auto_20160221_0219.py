# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-21 02:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('acao', '0005_auto_20160209_1435'),
    ]

    operations = [
        migrations.CreateModel(
            name='ComissaoParlamentar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_joined', models.DateField()),
                ('invite_reason', models.CharField(max_length=64)),
                ('comissao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acao.Comissoes')),
                ('parlamentar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acao.Parlamentar')),
            ],
        ),
        migrations.AddField(
            model_name='comissoes',
            name='parlamentar',
            field=models.ManyToManyField(through='acao.ComissaoParlamentar', to='acao.Parlamentar'),
        ),
    ]
